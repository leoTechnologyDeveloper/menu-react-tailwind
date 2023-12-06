import Logo from "./Logo.jsx";
import Menu from "./Menu.jsx";
const Header = () => {
  return (
    <header className="bg-orange-500 text-white p-3 flex justify-between text-2xl">
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
