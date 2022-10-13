import styles from './App.module.css';
import FileUpload from '../components/FileUpload';
import PastFiles from '../components/PastFiles';

function FileUploadPage() {
  return (
    <>
      <header className={styles['app-header']}>
        <div className="font-sans font-bold text-4xl">File Upload</div>
      </header>
      <div className={styles.app}>
        <FileUpload />
        <PastFiles />
      </div>
    </>
  );
}

export default FileUploadPage;
