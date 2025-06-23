import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MobileNav = ({ navList }) => {
  return (
    <div className="mobile-nav lg:hidden relative">
      <div className="py-2">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <img src="/wbms.svg" alt="" className="h-10" />
          </Link>
          <div className="flex items-center gap-3">
            {/* <TopUserNav /> */}
            <button>
              <FaBars />
            </button>
          </div>
        </div>
      </div>
      <ul>{navList}</ul>
    </div>
  );
};

export default MobileNav;
