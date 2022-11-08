import { Icon } from '@iconify/react';
import styles from '../styles/FileUpload.module.css';

export default function FileNotification({ file, progress, removeFile }) {
  return (
    <div className="rounded bg-white shadow-sm flex justify-between w-full my-2 p-2">
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
  );
}
