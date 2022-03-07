
function Navbar(){
    return <div>
                <nav className="bg-slate-100 p-2">
          <NavLink
            // className={(isActive) => `${isActive ? "bg-slate-300" : "bg-black	"}`}
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
            // className={(isActive) => `${isActive ? "bg-slate-300" : "bg-black	"}`}
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

}