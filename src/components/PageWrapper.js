import Sidebar from './Sidebar';

export default function PageWrapper({ children }) {
  return (
    <div id="page-wrapper" className="flex ">
      <Sidebar />
      <div id="content-wrapper" className="my-16 mx-4 w-full flex justify-center">
        {children}
      </div>
    </div>
  );
}
