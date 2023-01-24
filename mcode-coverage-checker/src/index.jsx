import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './pages/App';
import FileUploadPage from './pages/FileUploadPage';
import PageWrapper from './components/PageWrapper';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <Router basename="mcode-coverage-checker">
        <PageWrapper>
          <Routes>
            <Route path="/file-upload" element={<FileUploadPage />} />
            <Route path="/" element={<App />} />
          </Routes>
        </PageWrapper>
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
);
