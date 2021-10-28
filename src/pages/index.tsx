import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import PinnedFolders from "../components/PinnedFolders";
import RecentlyUsedFiles from "../components/RecentlyUsedFiles";
import Sidebar from "../components/Sidebar";

const Dashboard: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="md:flex">
        <main className="flex-1 min-h-screen border-r pt-16 px-6">
          <div className="flex justify-between">
            <h2>Pinned folders</h2>
            <a href="#" className="text-brand font-normal">
              View all
            </a>
          </div>
          <PinnedFolders />
          <div className="flex justify-between mt-10">
            <h2>Recently used files</h2>
            <a href="#" className="text-brand font-normal">
              View all
            </a>
          </div>
          <RecentlyUsedFiles />
        </main>
        <Sidebar />
      </div>
    </>
  );
};

export default Dashboard;
