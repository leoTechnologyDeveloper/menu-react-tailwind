import logo2 from "../assets/logo2.jpg";

const Logo = () => {
  return (
    <a href="#" className="h-full z-50">
      <img
        className="rounded-sm md:h-full w-10  md:w-full"
        src={logo2}
        alt="imagen logo"
        title="Logo"
      />
      {/* <p>logo2</p> */}
    </a>
  );
};

export default Logo;
