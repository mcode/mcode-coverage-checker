import UploadedFiles from '../components/UploadedFiles';
import FileUpload from '../components/FileUpload';
import styles from '../styles/App.module.css';

function FileUploadPage() {
  return (
    <div className="h-screen w-screen bg-background py-16 overflow-auto">
      <div className={styles.app}>
        <div className="mb-6">
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
