import UploadedFiles from '../components/UploadedFiles';
import FileUpload from '../components/FileUpload';

function FileUploadPage() {
  return (
    <div className="flex justify-center">
      <div className="h-screen max-w-6xl overflow-auto">
        <div className="mb-6">
          <h1 className="font-sans font-bold text-4xl">Upload Files</h1>
          <p className="text-sm text-gray-600">Upload your files here to view them in the dashboard</p>
          <FileUpload />
        </div>
        <div className="mb-6">
          <UploadedFiles />
        </div>
      </div>
    </div>
  );
}

export default FileUploadPage;
