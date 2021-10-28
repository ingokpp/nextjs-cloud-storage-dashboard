import {
  DocumentTextIcon,
  FolderIcon,
  MusicNoteIcon,
  PhotographIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import AdvertisementCard from "./AdvertisementCard";
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
    <aside className="md:w-96 min-h-screen pt-16 px-6 mb-5 md:mb-0">
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
      <AdvertisementCard />
    </aside>
  );
};

export default Sidebar;
