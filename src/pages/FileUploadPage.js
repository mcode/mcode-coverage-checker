import UploadedFiles from '../components/UploadedFiles';
import FileUpload from '../components/FileUpload';
import Endpoint from '../components/FHIRendpoint';

function FileUploadPage() {
  return (
    <div className="h-screen max-w-7xl min-w-[600px]">
      <div className="mb-6">
        <h1 className="font-sans font-bold text-4xl">Upload Files</h1>
        <p className="text-sm text-gray-600">Upload your files here to view them in the dashboard</p>
        <FileUpload />
        <Endpoint />
      </div>
      <div className="mb-6">
        <UploadedFiles />
      </div>
    </div>
  );
}

export default FileUploadPage;
