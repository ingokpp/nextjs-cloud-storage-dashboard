import FILES from "../data";

const RecentlyUsedFiles = () => {
  return (
    <table className="items-center bg-transparent w-full border-collapse mt-7">
      <thead>
        <tr>
          <th className="px-6 bg-gray-100 text-gray-400 align-middle border border-solid border-gray-300 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left select-none">
            File
          </th>
          <th className="px-6 bg-gray-100 text-gray-400 align-middle border border-solid border-gray-300 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left select-none">
            Size
          </th>
          <th className="px-6 bg-gray-100 text-gray-400 align-middle border border-solid border-gray-300 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left select-none">
            Last updated
          </th>
        </tr>
      </thead>
      <tbody>
        {FILES.map((file, index) => (
          <tr key={index}>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-3 text-gray-600">
              {file.filename}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-3 text-gray-600">
              {file.size}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-3 text-gray-600">
              {file.updatedAt}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecentlyUsedFiles;
