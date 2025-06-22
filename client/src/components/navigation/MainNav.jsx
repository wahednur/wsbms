import { FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./../theme/ThemeToggle";
const MainNav = () => {
  const navList = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/apartments">Apartments</NavLink>
      </li>
    </>
  );
  return (
    <div className="backdrop-blur-xs bg-gray-200">
      <div className="container">
        {/* Desktop navbar start  */}
        <div className="desk-nav lg:flex justify-between items-center hidden">
          <Link to={"/"}>
            <img src="/wbms.svg" alt="" className="h-10" />
          </Link>
          <ul className="flex items-center">{navList}</ul>
          <div>
            <ThemeToggle />
            User
          </div>
        </div>
        {/* Desktop navbar end  */}
        <div className="mobile-nav lg:hidden">
          <div className="container">
            <div className="flex justify-between items-center">
              <Link to={"/"}>
                <img src="/wbms.svg" alt="" className="h-10" />
              </Link>
              <div className="flex items-center gap-3">
                <button>
                  <FaBars />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
