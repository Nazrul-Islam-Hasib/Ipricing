import assets from '../../../assets/assest'
const Navbar = () => {
    const navOptions =
        <>
            <li><a>Feature</a></li>
            <li><a>Pricing</a></li>
            <li><a>Contact</a></li>
        </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">IPricing</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="avatar">
                    <div className="w-8 rounded-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={assets.icon} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;