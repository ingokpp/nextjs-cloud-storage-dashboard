import { CloudIcon } from "@heroicons/react/solid";
const Logo = () => {
  return (
    <a className="text-lg flex items-center" href="#">
      <CloudIcon className="w-7 h-7 mr-0.5 text-brand" />
      Cloud<span className="text-gray-600">Solution</span>
    </a>
  );
};

export default Logo;
