import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="bg-white px-4 py-2 shadow fixed top-0 w-full">
      <div className="container-lg mx-auto flex items-center">
        <Logo />
      </div>
    </nav>
  );
};

export default Navbar;
