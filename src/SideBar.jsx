import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return ( 

        <div style={{background: "d9d9"}}>
        <NavLink to={"/"} >
            Go to home
        </NavLink>
        <NavLink to={"/page2"} >
            Goto page 2
        </NavLink>

        </div>
     );
}
 
export default Sidebar;