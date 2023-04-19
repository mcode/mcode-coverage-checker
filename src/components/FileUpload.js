import { useState, useMemo, useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Icon } from '@iconify/react';
import { v4 as uuidv4 } from 'uuid';
import { uploadedFilesLookup } from '../recoil_state';
import formatBytes from '../lib/fileSize';
import {
  getAssessmentStats,
  getDiseaseStats,
  getGenomicsStats,
  getOutcomeStats,
  getOverallStats,
  getPatientStats,
  getTreatmentStats,
} from '../lib/coverageStats/coverageStats';
import FileNotification from './FileNotification';
import RejectedFileNotification from './RejectedFileNotification';
import Endpoint from './FHIRendpoint';
import coverageChecker from '../lib/coverageChecker/coverageChecker';

function FileUpload() {
  const setFilesLookup = useSetRecoilState(uploadedFilesLookup);
  // What files are valid to upload
  function relevantFileFilter(file) {
    return file.type === 'application/json';
  }
  // Track a local list of files to determine which should be displayed as notifications temporarily
  const [localFilesLookup, setLocalFilesLookup] = useState({});
  const localFiles = useMemo(() => Object.values(localFilesLookup).filter((file) => !file.rejected));
  const rejectedFiles = useMemo(() => Object.values(localFilesLookup).filter((file) => file.rejected));
  const [parent] = useAutoAnimate();
  const [progress, setProgress] = useState({});
  const [dragActive, setDragActive] = useState(false);

  // Removes a local file notification, not a file from the store
  const removeFile = useCallback(
    (fileObject) => {
      const newLocalFilesLookup = { ...localFilesLookup };
      delete newLocalFilesLookup[fileObject.id];
      setLocalFilesLookup(newLocalFilesLookup);
    },
    [localFilesLookup, setLocalFilesLookup],
  );
  // Progress Object Tracking
  // update progress to 0 when the read begins
  const readStartHandler = useCallback(
    (fileId) => {
      setProgress((prevProgress) => {
        const newProgress = { ...prevProgress };
        newProgress[fileId] = 0;
        return newProgress;
      });
    },
    [setProgress],
  );
  // update progress stored in state and new data is loaded
  const readProgressHandler = useCallback(
    (fileId, e) => {
      setProgress((prevProgress) => {
        const newProgress = { ...prevProgress };
        newProgress[fileId] = e.loaded / e.total;
        return newProgress;
      });
    },
    [setProgress],
  );
  // ensure progress is at 100 and resolve the callback when the read is over

  const readEndHandler = useCallback(
    (fileId, newFile, fileReader, resolve) => {
      setProgress((prevProgress) => {
        const newProgress = { ...prevProgress };
        newProgress[fileId] = 1;
        return newProgress;
      });
      const body = JSON.parse(fileReader.result);
      const coverageData = coverageChecker(body);
      const stats = {
        Overall: (getOverallStats(coverageData).percentage * 100).toFixed(2),
        Assessment: (getAssessmentStats(coverageData).percentage * 100).toFixed(2),
        Treatment: (getTreatmentStats(coverageData).percentage * 100).toFixed(2),
        Genomics: (getGenomicsStats(coverageData).percentage * 100).toFixed(2),
        Patient: (getPatientStats(coverageData).percentage * 100).toFixed(2),
        Disease: (getDiseaseStats(coverageData).percentage * 100).toFixed(2),
        Outcome: (getOutcomeStats(coverageData).percentage * 100).toFixed(2),
      };
      const fileWithBody = { ...newFile, body, stats };
      resolve(fileWithBody);
    },
    [setProgress],
  );

  // Use the FileReader Object to track progress and resolve promise when finished
  function readFile(fileObject, newFile, resolve, reject) {
    const fileId = newFile.id;
    // Set up fileReader
    const fileReader = new FileReader();
    fileReader.onloadstart = () => readStartHandler(fileId);
    fileReader.onprogress = (e) => readProgressHandler(fileId, e);
    fileReader.onload = () => readEndHandler(fileId, newFile, fileReader, resolve);
    fileReader.onerror = reject;
    fileReader.readAsText(fileObject);
  }

  function createFile(fileObject) {
    const fileId = uuidv4();
    return {
      id: fileId,
      name: fileObject.name,
      size: formatBytes(fileObject.size),
      type: fileObject.type,
      dateAdded: new Intl.DateTimeFormat('en-US').format(new Date()),
      body: null,
      stats: null,
    };
  }

  // Create a new file object and update both local and gloabl lookups with this new data
  function addFile(fileObject, resolve, reject) {
    const newFile = createFile(fileObject);
    setFilesLookup((prevFilesLookup) => {
      const newFilesLookup = { ...prevFilesLookup };
      newFilesLookup[newFile.id] = newFile;
      return newFilesLookup;
    });
    setLocalFilesLookup((prevLocalFilesLookup) => {
      const newLocalFilesLookup = { ...prevLocalFilesLookup };
      newLocalFilesLookup[newFile.id] = newFile;
      return newLocalFilesLookup;
    });
    readFile(fileObject, newFile, resolve, reject);
  }

  // Load files into memory using promises
  function loadFiles(files) {
    // Files is a FileList object, we need to convert this into an array for filtering
    const filesArray = [...files];
    const filePromises = [];
    const filesToReject = filesArray.filter((file) => !relevantFileFilter(file));
    const filesToAdd = filesArray.filter(relevantFileFilter);
    // For rejected files, create a notification object
    setLocalFilesLookup((previousFilesLookup) => {
      const rejectedFilesLookup = { ...previousFilesLookup };
      filesToReject.forEach((file) => {
        const rejectionNotification = {
          ...createFile(file),
          rejected: true,
        };
        rejectionNotification.reason = `File type of ${rejectionNotification.type} is not accepted`;
        rejectedFilesLookup[rejectionNotification.id] = rejectionNotification;
      });
      return rejectedFilesLookup;
    });
    // Add all relevant files
    filesToAdd.forEach((file) =>
      filePromises.push(
        new Promise((resolve, reject) => {
          addFile(file, resolve, reject);
        }),
      ),
    );
    Promise.all(filePromises).then((fs) => {
      // Update the files lookups, local and global, when all are uploaded
      setFilesLookup((prevFilesLookup) => {
        const tempFilesLookup = { ...prevFilesLookup };
        fs.forEach((file) => {
          tempFilesLookup[file.id] = file;
        });
        return tempFilesLookup;
      });
      setLocalFilesLookup((prevLocalFilesLookup) => {
        const tempLocalFilesLookup = { ...prevLocalFilesLookup };
        fs.forEach((file) => {
          tempLocalFilesLookup[file.id] = file;
        });
        return tempLocalFilesLookup;
      });
    });
  }

  function handleDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      loadFiles(e.dataTransfer.files);
    }
  }

  function handleChange(event) {
    const filesToAdd = event.target.files;
    if (filesToAdd && filesToAdd[0]) {
      loadFiles(filesToAdd);
    }
  }

  return (
    <>
      <div
        id="file-upload-zone"
        className={` relative h-48 w-100 my-2 rounded-lg border-2 border-link bg-link-tinted ${
          dragActive ? 'border-solid bg-link-icon-background' : 'border-dashed bg-link-tinted'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <label htmlFor="input-file-upload" className="flex justify-center flex-col h-full cursor-pointer">
          <div className="rounded-full m-4 p-2 bg-link-icon-background mx-auto">
            <Icon icon="akar-icons:cloud-upload" className=" text-link h-10 w-10" />
          </div>
          <p className="mx-auto">
            Drag and drop files, or click to <span className="font-bold text-link">Browse</span>
          </p>
          <p className="mx-auto text-sm italic text-gray-500">Supports .json</p>
          <input
            onChange={handleChange}
            className="hidden"
            id="input-file-upload"
            type="file"
            accept=".json"
            multiple
          />
        </label>
      </div>
      <Endpoint
        createFile={(fileObject) => createFile(fileObject)}
        loadFiles={(files) => loadFiles(files)}
        setLocalFilesLookup={setLocalFilesLookup}
      />
      <div ref={parent}>
        {localFiles.map((file) => (
          <FileNotification key={file.id} file={file} progress={progress} removeFile={removeFile} />
        ))}
        {rejectedFiles.map((file) => (
          <RejectedFileNotification key={file.id} file={file} removeFile={removeFile} />
        ))}
      </div>
    </>
  );
}

export default FileUpload;
