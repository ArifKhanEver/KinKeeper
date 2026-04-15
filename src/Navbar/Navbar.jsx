import { NavLink } from "react-router";
import { HiOutlineHome, HiOutlineClock } from "react-icons/hi";
import { GoGraph } from "react-icons/go";
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between px-12 py-4 bg-white ">
            <div className="text-xl font-bold text-slate-800">
                <img src={logo} alt="KeenKeeper" />
            </div>

            <div className="hidden md:block">
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
            </div>


            <div className=" block md:hidden">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 -ml-[80px] w-52 p-2 shadow">

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

                        <NavLink to="/timeline" className=
                        {
                            ({ isActive }) =>
                            `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                            isActive ? "bg-emerald-800 text-white" : "text-slate-600 hover:bg-emerald-50"
                            }`
                        }>
                            <HiOutlineClock className="text-xl" />
                            <span>Timeline</span>
                        </NavLink>

                        <NavLink to="/stats" className=
                        {
                            ({ isActive }) =>
                            `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                            isActive ? "bg-emerald-800 text-white" : "text-slate-600 hover:bg-emerald-50"
                            }`
                        }>
                            <GoGraph className="text-xl" />
                            <span>Stats</span>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;