function FieldCountPopup({ fieldCounts }) {
  return (
    <div className="absolute left-full top-1/2 z-20 ml-3 -translate-y-1/4 whitespace-nowrap rounded bg-gray-300 py-[6px] px-4 text-sm text-black opacity-0 group-hover:opacity-100">
      <span className="absolute left-[-3px] top-1/4 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm bg-gray-300" />
      <div className="flex flex-row">
        <ul>
          {fieldCounts.slice(0, 8).map((field) => (
            <li className="pr-2" key={field.name}>
              {field.name}
            </li>
          ))}
        </ul>
        <ul>
          {fieldCounts.slice(0, 8).map((field) => (
            <li key={field.name}>
              {field.covered}/{field.total}
            </li>
          ))}
        </ul>
        <ul>
          {fieldCounts.slice(8).map((field) => (
            <li className="pl-1" key={field.name}>
              {field.name}
            </li>
          ))}
        </ul>
        <ul>
          {fieldCounts.slice(8).map((field) => (
            <li className="pl-2" key={field.name}>
              {field.covered}/{field.total}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FieldCountPopup;
