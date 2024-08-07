import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css"
const Sidebar = () => {
    return (
        <div>
            <NavLink to={"/"} className={"btn btn-success"} >
                Home
            </NavLink>   
            <NavLink to={"/about-us"}>
                About ass
            </NavLink>
        </div>
    
    );
};
export default Sidebar;
