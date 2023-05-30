import { useState } from 'react';
import axios from 'axios';
import Advanced from './AdvancedOptions';

// eslint-disable-next-line no-unused-vars
function Endpoint({ createFile, loadFiles, setLocalFilesLookup }) {
  const [link, setLink] = useState('');
  const [buttonHover, setButtonHover] = useState(false);
  const [buttonClick, setButtonClick] = useState(false);
  const [requestHeaders, setRequestHeaders] = useState([]);

  function formatRequestHeaders(headers) {
    const formattedHeaders = {};
    headers.forEach(([key, value]) => {
      formattedHeaders[key] = value;
    });
    return formattedHeaders;
  }

  async function loadFromEndpoint(query) {
    const bundle = await axios
      .get(query, { headers: formatRequestHeaders(requestHeaders) })
      .then((res) => res.data)
      .catch((e) => {
        setLocalFilesLookup((previousFilesLookup) => {
          const rejectedFilesLookup = { ...previousFilesLookup };
          const rejectionNotification = {
            ...createFile(new File([], `bundle-${new Date().toISOString()}.json`)),
            rejected: true,
          };
          rejectionNotification.reason = `Error retrieving bundle from URL: ${e}`;
          rejectedFilesLookup[rejectionNotification.id] = rejectionNotification;
          return rejectedFilesLookup;
        });
      });
    if (bundle) {
      const newFile = new File([JSON.stringify(bundle)], `bundle-${new Date().toISOString()}.json`, {
        type: 'application/json',
      });
      loadFiles([newFile]);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    loadFromEndpoint(link);
  };

  const handleButtonHover = () => {
    setButtonHover(true);
  };

  const handleButtonLeave = () => {
    setButtonHover(false);
  };

  const handleButtonClick = () => {
    setButtonClick(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <label type="text" htmlFor="s1-2">
          <div className="pt-3 pb-1">
            <h1 className="font-sans font-bold text-md">FHIR Endpoint URL</h1>
          </div>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="http://example.org/"
            className="w-full rounded-lg h-10 shadow-widgit pl-2 pr-10"
          />
        </label>
        <button
          type="submit"
          className={`absolute shadow-widgit top-8 right-0 bg-background rounded-lg px-6 py-1 mt-3 mr-1 font-sans font-bold  transition-colors duration-200 ease-in-out
            ${buttonHover ? 'bg-gray-300' : ''} ${buttonClick ? 'bg-gray-400' : ''}`}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
          onMouseDown={handleButtonClick}
          onMouseUp={() => setButtonClick(false)}
        >
          Connect
        </button>
      </div>
      <Advanced requestHeaders={requestHeaders} setRequestHeaders={setRequestHeaders} />
    </form>
  );
}

export default Endpoint;
