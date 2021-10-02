import img from "./logo.jpg";
import "./style.css";
const Header = () => {
  return (
    <>
      <div className="logo">
        <img src={img} className="logo-img" alt="Logo" />
      </div>
    </>
  );
};
export default Header;
