import { FolderIcon } from "@heroicons/react/solid";

const PINNED_FOLDERS = [
  {
    title: "Fonts",
    info: "1.234 files | 233.8 MB",
  },
  {
    title: "Development",
    info: "1.234 files | 233.8 MB",
  },
  {
    title: "Projects",
    info: "1.234 files | 233.8 MB",
  },
  {
    title: "Music",
    info: "1.234 files | 233.8 MB",
  },
  {
    title: "Work",
    info: "1.234 files | 233.8 MB",
  },
  {
    title: "Vacation Photos",
    info: "1.234 files | 233.8 MB",
  },
];

const PinnedFolders = () => {
  return (
    <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
      {PINNED_FOLDERS.map((folder, index) => (
        <div
          key={index}
          className="flex items-center p-4 border rounded-lg space-x-2 mt-5 md:mt-0"
        >
          <FolderIcon className="w-12 h-12 text-brand" />
          <div className="leading-tight">
            <h3>{folder.title}</h3>
            <span className="text-xs text-gray-400">{folder.info}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PinnedFolders;
