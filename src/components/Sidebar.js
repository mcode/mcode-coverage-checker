import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-60 p-4 flex-shrink-0 shadow-xl">
      <h1 className="font-semibold text-2xl mb-8">Coverage Checker</h1>
      <nav className="flex flex-col gap-2">
        <Link to="/file-upload">Upload Files</Link>
        <Link to="/">mCODE Coverage</Link>
      </nav>
    </div>
  );
}
