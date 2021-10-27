import {
  DocumentTextIcon,
  FolderIcon,
  MusicNoteIcon,
  PhotographIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import GaugeChart from "./GaugeChart";
import SidebarItem from "./SidebarItem";

const SIDEBAR_DATA = [
  {
    title: "Documents",
    icon: <DocumentTextIcon className="w-6 h-6" />,
    info: "83 files | 1 GB",
  },
  {
    title: "Music",
    icon: <MusicNoteIcon className="w-6 h-6" />,
    info: "543 files | 4.32 GB",
  },
  {
    title: "Photos",
    icon: <PhotographIcon className="w-6 h-6" />,
    info: "9.612 files | 10.93 GB",
  },
  {
    title: "Videos",
    icon: <VideoCameraIcon className="w-6 h-6" />,
    info: "42 files | 123.99 GB",
  },
  {
    title: "Other files",
    icon: <FolderIcon className="w-6 h-6" />,
    info: "12 files | 18 MB",
  },
];

const Sidebar = () => {
  return (
    <aside className="w-96 min-h-screen pt-16 px-6">
      <h2>Storage usage</h2>
      <GaugeChart />
      <ul className="mt-7">
        {SIDEBAR_DATA.map((sidebarItem, index) => (
          <SidebarItem
            key={index}
            title={sidebarItem.title}
            icon={sidebarItem.icon}
            info={sidebarItem.info}
          />
        ))}
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
  );
};

export default Sidebar;
