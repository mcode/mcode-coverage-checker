import { Icon } from '@iconify/react';

export default function RejectedFileNotification({ file, removeFile }) {
  return (
    <div className="rounded bg-white shadow-sm flex justify-between w-full my-2 p-2">
      <div className="w-11/12 text-left flex">
        <div className="rounded-full p-2 bg-red-100 mr-1 h-fit">
          <Icon icon="bx:error-alt" className=" text-red-500 h-6 w-6" />
        </div>
        <div className=" text-sm w-full">
          <h2 className="text-gray-500 text-ellipsis">{file.name}</h2>
          <p className="text-gray-500">{file.size}</p>
          <hr className="rounded w-11/12 h-2 mr-2 bg-red-500 inline-block" />
          <p className="inline">Error</p>
          <p className="italic">{file.reason}</p>
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
