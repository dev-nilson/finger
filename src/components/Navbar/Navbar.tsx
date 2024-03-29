import logo from "../../../public/assets/logo.png";
import "./Navbar.css";

type NavbarProps = {
  setIsModalOpen: (arg: boolean) => void;
};

function Navbar({ setIsModalOpen }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <button className="navbar__button" onClick={() => setIsModalOpen(true)}>
        Log in
      </button>
    </nav>
  );
}

export default Navbar;
