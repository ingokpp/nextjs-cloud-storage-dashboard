import { ReactElement } from "react";

interface SidebarItemProps {
  title: string;
  icon: ReactElement;
  info: string;
}

const SidebarItem = (props: SidebarItemProps) => {
  const { title, icon, info } = props;
  return (
    <li className="flex items-center space-x-3 mb-5">
      <div className="w-12 h-12 rounded-lg border flex items-center justify-center text-gray-400">
        {icon}
      </div>
      <div className="h-auto">
        <h3>
          {title} <br />
          <span className="text-xs text-gray-400">{info}</span>
        </h3>
      </div>
    </li>
  );
};

export default SidebarItem;
