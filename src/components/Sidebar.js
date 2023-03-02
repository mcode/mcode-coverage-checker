import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`z-50 bg-background flex flex-col ${
        open ? 'w-60' : 'w-[4.5rem]'
      } p-4 h-screen sticky top-0 left-0 flex-shrink-0 shadow-sidebarButton transition-all`}
    >
      {/* sidebar header */}
      <div className="flex flex-row mb-8">
        <h1 className={`${open ? '' : 'hidden'} font-semibold text-xl`}>Coverage Checker</h1>
        <Icon
          icon="akar-icons:chevron-down"
          className="ml-2"
          height="24"
          rotate="90deg"
          vFlip={!open}
          onClick={() => setOpen(!open)}
        />
      </div>
      {/* sidebar body */}
      <div className="flex-1">
        {/* upper section */}
        <div className="h-3/5 flex flex-col gap-5">
          <h2 className="font-semibold text-heading-grey mb-2">{open ? 'Navigation' : 'Nav'}</h2>
          <Link
            to="/file-upload"
            className={`flex flex-row py-2 rounded-sidebarButton ${
              useLocation().pathname === '/file-upload' ? 'shadow-sidebarButton' : ''
            }`}
          >
            <Icon icon="bi:folder" height="24" className="ml-2" />
            <p className={`${open ? 'pl-2' : 'hidden'}`}>Upload Files</p>
          </Link>
          <Link
            to="/"
            className={`flex flex-row py-2 rounded-sidebarButton ${
              useLocation().pathname === '/' ? 'shadow-sidebarButton' : ''
            }`}
          >
            <Icon icon="fluent:database-20-filled" height="24" className="ml-2" />
            <p className={`${open ? 'pl-2' : 'hidden'}`}>mCODE Coverage</p>
          </Link>
        </div>
        {/* lower section */}
        <div className="flex flex-col gap-5">
          <hr className="h-px bg-gray-300 border-0" />
          <h2 className="font-semibold text-heading-grey mb-2">About</h2>
          <a
            href="https://github.com/mcode/mcode-coverage-checker"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row py-2"
          >
            <Icon icon="akar-icons:github-fill" height="24" className="ml-2" />
            <p className={`${open ? 'pl-2' : 'hidden'}`}>Documentation</p>
          </a>
          <a
            href="https://build.fhir.org/ig/HL7/fhir-mCODE-ig/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row py-2"
          >
            <Icon icon="bi:fire" height="24" className="ml-2" />
            <p className={`${open ? 'pl-2' : 'hidden'}`}>mCODE Resources</p>
          </a>
        </div>
      </div>
    </div>
  );
}
