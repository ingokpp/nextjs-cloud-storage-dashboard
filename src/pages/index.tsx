import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import PinnedFolders from "../components/PinnedFolders";
import Sidebar from "../components/Sidebar";

const FILES = [
  {
    filename: "designtemplate.psd",
    size: "74 MB",
    updatedAt: "Today",
  },
  {
    filename: "Contract.doc",
    size: "1 MB",
    updatedAt: "Today",
  },
  {
    filename: "ReadMe.md",
    size: "400 KB",
    updatedAt: "Yesterday",
  },
  {
    filename: "designtemplate_01.psd",
    size: "60 MB",
    updatedAt: "Yesterday",
  },
  {
    filename: "master.ppt",
    size: "5 MB",
    updatedAt: "Last week",
  },
  {
    filename: "master2.ppt",
    size: "6 MB",
    updatedAt: "Last week",
  },
  {
    filename: "photos.psd",
    size: "12 GB",
    updatedAt: "Last week",
  },
  {
    filename: "salary.cls",
    size: "2 MB",
    updatedAt: "Last week",
  },
  {
    filename: "salary_final.cls",
    size: "2 MB",
    updatedAt: "Last week",
  },
  {
    filename: "candidate.cls",
    size: "5 MB",
    updatedAt: "Last week",
  },
];

const Dashboard: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <main className="flex-1 min-h-screen border-r pt-16 px-6">
          <div className="flex justify-between">
            <h2>Pinned folders</h2>
            <h2 className="text-brand font-normal">View all</h2>
          </div>
          <PinnedFolders />
          <div className="flex justify-between mt-10">
            <h2>Recently used files</h2>
            <h2 className="text-brand font-normal">View all</h2>
          </div>
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
        </main>
        <Sidebar />
      </div>
    </>
  );
};

export default Dashboard;
