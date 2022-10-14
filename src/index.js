import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './pages/App';
import FileUploadPage from './pages/FileUploadPage';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <RecoilRoot>
    <Router basename="mcode-coverage-checker">
      <Routes>
        <Route path="/file-upload" element={<FileUploadPage />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </RecoilRoot>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
