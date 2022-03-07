//third party
import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
    
  //Classnames
  let navLinkClassNames = "p-2  rounded inline-block ";
  let activeNavLinkClassNames = "shadow-md bg-slate-50";

  //--
  return (
    <div className="bg-slate-100 ">
      <nav className="py-2 px-4 mx-2">
        <NavLink
          className={({ isActive }) =>
            navLinkClassNames + (isActive ? activeNavLinkClassNames : "")
          }
          to="/"
          end
        >
          Home
        </NavLink>
        <NavLink
          end
          className={({ isActive }) =>
            navLinkClassNames + (isActive ? activeNavLinkClassNames : "")
          }
          to="admin"
        >
          {" "}
          Admin
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
