import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./../theme/ThemeToggle";
import MobileNav from "./MobileNav";
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
        <MobileNav navList={navList} />
      </div>
    </div>
  );
};

export default MainNav;
