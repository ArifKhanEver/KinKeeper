import { NavLink } from "react-router";
import { HiOutlineHome, HiOutlineClock } from "react-icons/hi";
import { GoGraph } from "react-icons/go";
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="border-b border-gray-200">
        <nav className="container mx-auto flex items-center justify-between px-12 py-4 bg-white ">
            <div className="text-xl font-bold text-slate-800">
                <img src={logo} alt="KeenKeeper" />
            </div>

            <div className="flex items-center gap-4">
                <NavLink to="/" className=
                {
                    ({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive ? "bg-emerald-800 text-white" : "text-slate-600 hover:bg-emerald-50"
                    }`
                }>
                    <HiOutlineHome className="text-xl" />
                    <span>Home</span>
                </NavLink>

                <NavLink to="/timeline" className={
                    ({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive ? "bg-emerald-800 text-white" : "text-slate-600 hover:bg-emerald-50"
                    }`
                }>
                    <HiOutlineClock className="text-xl" />
                    <span>Timeline</span>
                </NavLink>

                <NavLink to="/stats" className={
                    ({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive ? "bg-emerald-800 text-white" : "text-slate-600 hover:bg-emerald-50"
                    }`
                }>
                    <GoGraph className="text-xl" />
                    <span>Stats</span>
                </NavLink>
            </div>
        </nav>
    </div>
  );
};

export default Navbar;