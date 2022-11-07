import { useState, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Icon } from '@iconify/react';
import { v4 as uuidv4 } from 'uuid';
import { uploadedFilesLookup } from '../recoil_state';
import { formatBytes } from '../lib/fileSize';
import styles from '../styles/FileUpload.module.css';

function FileUpload() {
  const [filesLookup, setFilesLookup] = useRecoilState(uploadedFilesLookup);
  // Track a local list of files to determine which should be displayed as notifications temporarily
  const [localFilesLookup, setLocalFilesLookup] = useState({});
  const localFiles = useMemo(() => Object.values(localFilesLookup).map((file) => file));
  const [parent] = useAutoAnimate();
  const [progress, setProgress] = useState({});
  const [dragActive, setDragActive] = useState(false);

  // Removes a local file notification, not a file from the store
  function removeFile(fileObject) {
    const newLocalFilesLookup = { ...localFilesLookup };
    delete newLocalFilesLookup[fileObject.id];
    setLocalFilesLookup(newLocalFilesLookup);
  }

  // Use the FileReader Object to track progress and resolve promise when finished
  function readFile(fileObject, newFile, resolve, reject) {
    const fileId = newFile.id;
    // Set up fileReader
    const fileReader = new FileReader();
    // update progress to 0 when the read begins
    function readStartHandler() {
      setProgress((prevProgress) => {
        const newProgress = { ...prevProgress };
        newProgress[fileId] = 0;
        return newProgress;
      });
    }
    // update progress stored in state and new data is loaded
    function readProgressHandler(e) {
      setProgress((prevProgress) => {
        const newProgress = { ...prevProgress };
        newProgress[fileId] = e.loaded / e.total;
        return newProgress;
      });
    }
    // ensure progress is at 100 and resolve the callback when the read is over
    function readEndHandler() {
      setProgress((prevProgress) => {
        const newProgress = { ...prevProgress };
        newProgress[fileId] = 1;
        return newProgress;
      });
      const body = JSON.parse(fileReader.result);
      const fileWithBody = { ...newFile, body };
      resolve(fileWithBody);
    }
    fileReader.onloadstart = readStartHandler;
    fileReader.onprogress = readProgressHandler;
    fileReader.onload = readEndHandler;
    fileReader.onerror = reject;
    fileReader.readAsText(fileObject);
  }

  // Create a new file object and update both local and gloabl lookups with this new data
  function addFile(fileObject, resolve, reject) {
    const fileId = uuidv4();
    const newFile = {
      id: fileId,
      name: fileObject.name,
      size: formatBytes(fileObject.size),
      type: fileObject.type,
      dateAdded: new Intl.DateTimeFormat('en-US').format(new Date()),
      body: null,
    };
    const newFilesLookup = { ...filesLookup };
    newFilesLookup[fileId] = newFile;
    setFilesLookup(newFilesLookup);
    const newLocalFilesLookup = { ...localFilesLookup };
    newLocalFilesLookup[fileId] = newFile;
    setLocalFilesLookup(newLocalFilesLookup);
    readFile(fileObject, newFile, resolve, reject);
  }

  // Load files into memory using promises
  function loadFiles(filesToAdd) {
    const filePromises = [];
    for (let index = 0; index < filesToAdd.length; index += 1) {
      const file = filesToAdd[index];
      filePromises.push(
        new Promise((resolve, reject) => {
          addFile(file, resolve, reject);
        }),
      );
    }
    Promise.all(filePromises).then((fs) => {
      // Update the files lookups, local and global, when all are uploaded
      const tempFilesLookup = { ...filesLookup };
      const tempLocalFilesLookup = { ...localFilesLookup };
      fs.forEach((file) => {
        tempFilesLookup[file.id] = file;
        tempLocalFilesLookup[file.id] = file;
      });
      setFilesLookup(tempFilesLookup);
      setLocalFilesLookup(tempLocalFilesLookup);
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
      <div className="font-sans font-bold text-4xl">Upload Files</div>
      <p className="text-sm">Upload your files here to view them in the dashboard</p>
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
      <div ref={parent}>
        {localFiles.map((file) => (
          <div key={file.id} className="rounded bg-white shadow-sm flex justify-between w-full my-2 p-2">
            <div className="w-11/12 text-left flex">
              <div className="rounded-full p-2 bg-link-icon-background mr-1 h-fit">
                <Icon icon="bi:file-earmark-code" className="text-link h-6 w-6" />
              </div>
              <div className="w-full">
                <h2 className="text-sm text-gray-500 text-ellipsis">{file.name}</h2>
                <p className="text-sm text-gray-500">{file.size}</p>
                <label htmlFor={`progress-bar-${file.id}`}>
                  <progress
                    id={`progress-bar-${file.id}`}
                    className={`h-2 w-11/12 w- mr-2 text-link ${styles.progress} `}
                    max="100"
                    value={(progress[file.id] * 100).toFixed(0)}
                  />
                  <p className="inline">{(progress[file.id] * 100).toFixed(0)}%</p>
                </label>
              </div>
            </div>
            <div className="flex justify-right">
              <Icon
                icon="bi:x-lg"
                onClick={() => removeFile(file)}
                className="text-gray-500 h-4 w-4 text-right m-1 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FileUpload;
