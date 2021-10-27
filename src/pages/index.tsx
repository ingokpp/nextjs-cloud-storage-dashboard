import {
  DocumentTextIcon,
  FolderIcon,
  MusicNoteIcon,
  PhotographIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import type { NextPage } from "next";
import GaugeChart from "../components/GaugeChart";
import Navbar from "../components/Navbar";

const Dashboard: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <main className="flex-1 min-h-screen border-r pt-16 px-6">
          <h2>Pinned folders</h2>
        </main>
        <aside className="w-96 min-h-screen pt-16 px-6">
          <h2>Storage usage</h2>
          <GaugeChart />
          <ul className="mt-7">
            <li className="flex items-center space-x-3 mb-5">
              <div className="w-12 h-12 rounded-lg border flex items-center justify-center text-gray-400">
                <MusicNoteIcon className="w-6 h-6" />
              </div>
              <div className="h-auto">
                <h3>
                  Music <br />
                  <span className="text-xs text-gray-400">
                    9.543 files | 4.32 GB
                  </span>
                </h3>
              </div>
            </li>
            <li className="flex items-center space-x-3 mb-5">
              <div className="w-12 h-12 rounded-lg border flex items-center justify-center text-gray-400">
                <DocumentTextIcon className="w-6 h-6" />
              </div>
              <div className="h-auto">
                <h3>
                  Documents <br />
                  <span className="text-xs text-gray-400">
                    754 files | 90 MB
                  </span>
                </h3>
              </div>
            </li>
            <li className="flex items-center space-x-3 mb-5">
              <div className="w-12 h-12 rounded-lg border flex items-center justify-center text-gray-400">
                <PhotographIcon className="w-6 h-6" />
              </div>
              <div className="h-auto">
                <h3>
                  Photos <br />
                  <span className="text-xs text-gray-400">
                    1.385 files | 2.55 GB
                  </span>
                </h3>
              </div>
            </li>
            <li className="flex items-center space-x-3 mb-5">
              <div className="w-12 h-12 rounded-lg border flex items-center justify-center text-gray-400">
                <VideoCameraIcon className="w-6 h-6" />
              </div>
              <div className="h-auto">
                <h3>
                  Videos <br />
                  <span className="text-xs text-gray-400">
                    54 files | 9.12 GB
                  </span>
                </h3>
              </div>
            </li>
            <li className="flex items-center space-x-3 mb-5">
              <div className="w-12 h-12 rounded-lg border flex items-center justify-center text-gray-400">
                <FolderIcon className="w-6 h-6" />
              </div>
              <div className="h-auto">
                <h3>
                  Other files <br />
                  <span className="text-xs text-gray-400">
                    5.324 files | 20.12 GB
                  </span>
                </h3>
              </div>
            </li>
          </ul>
          <div className="space-y-3 mt-7 bg-blue-900 rounded-lg p-4">
            <span className="block text-xs text-gray-400">
              Be quick and upgrade
            </span>
            <h3 className="text-white">
              Get enough storage space for
              <br /> all your data before it runs out.
            </h3>
            <button className="rounded-lg px-2 py-1.5 text-white bg-brand text-sm">
              Upgrade now
            </button>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Dashboard;
