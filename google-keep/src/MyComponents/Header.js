import img from "./logo.jpg";
import './style.css';
const Header=()=>{
    return ( <>
    <div className="logo"><img src={img} class="logo-img"/></div>
    </>
    );
}
export default Header;