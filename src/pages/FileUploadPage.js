import UploadedFiles from '../components/UploadedFiles';
import FileUpload from '../components/FileUpload';
import PageWrapper from '../components/PageWrapper';

function FileUploadPage() {
  return (
    <PageWrapper>
      <div className="h-screen overflow-auto">
        <div className="mb-6">
          <h1 className="font-sans font-bold text-4xl">Upload Files</h1>
          <p className="text-sm">Upload your files here to view them in the dashboard</p>
          <FileUpload />
        </div>
        <div className="mb-6">
          <UploadedFiles />
        </div>
      </div>
    </PageWrapper>
  );
}

export default FileUploadPage;
