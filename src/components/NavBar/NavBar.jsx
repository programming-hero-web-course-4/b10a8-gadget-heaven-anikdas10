import { Link, NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
const NavBar = () => {
    const location = useLocation();

    return (
        <div className={location.pathname==='/' || location.pathname==='/laptops' || location.pathname==='/phones' || location.pathname==='/accessories' || location.pathname==='/smart%20watches' || location.pathname ==='/macbook' || location.pathname==='/iphone'?"bg-purple text-white mx-4 rounded-t-md ":'bg-white'}>
           <nav className="container flex items-center justify-between py-4 sticky top-0 mt-4 ">
            <button className="text-xl lg:text-2xl  font-bold ">Gadget Heaven</button>
            <div>
                <ul className="flex items-center gap-3 text-lg font-serif">
                    <li>
                        <NavLink 
                        className={({ isActive }) =>
                    isActive ? 'underline' : ''} 
                    to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                         className={({ isActive }) =>
                    isActive ? 'text-purple text-lg' : 'text-lg'}
                     to='/statistics'>Statistics</NavLink>
                    </li>
                    <li>
                        <NavLink
                         className={({ isActive }) =>
                    isActive ? 'text-purple' : ''}
                     to='/dashboard'>Dashboard</NavLink>
                    </li>
                </ul>
            </div>
            <div className="text-lg text-black flex items-center gap-1">
                <Link to="/dashboard" className="p-1 bg-white rounded-full border"><IoCartOutline /></Link>
                <button className="p-1 rounded-full bg-white border"><FaRegHeart></FaRegHeart></button>
            </div>
            </nav> 
        </div>
    );
};

export default NavBar;