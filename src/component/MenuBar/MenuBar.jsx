import "./MenuBar.css";
import logo from "../../assets/social-logo.png";
import { useData } from "../../context/data/dataContext";
import { NavLink, useNavigate } from "react-router-dom";

export function MenuBar() {
  return (
    <aside
      className={`aside-container flex flex-col mr-2 w-1/4 md:mr-0 md:fixed md:bottom-0 md:z-30 md:w-full `}
    >
      <div className="sticky top-8">
        <header>
          <img className="h-16 md:hidden" src={logo} />
        </header>
        <main className="my-5 pr-4 md:pr-0 md:my-1 md:flex md:justify-around md:text-2xl md:pt-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "aside-option active " : "aside-option")}
            >
              <i className="fa-solid fa-house-chimney mr-3 md:mr-0" />
              <span className="md:hidden">FEED</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notification"
              className={({ isActive }) => (isActive ? "aside-option active " : "aside-option")}
            >
              <i className="fa-solid fa-bell mr-3 md:mr-0" />
              <span className="md:hidden">NOTIFICATION</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bookmark"
              className={({ isActive }) => (isActive ? "aside-option active " : "aside-option")}
            >
              <i className="fa-solid fa-bookmark mr-3 md:mr-0" />
              <span className="md:hidden">BOOKMARK</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "aside-option active " : "aside-option")}
            >
              <i className="fa-solid fa-circle-user mr-3 md:mr-0" />
              <span className="md:hidden"> PROFILE</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "aside-option active " : "aside-option")}
            >
              <i className="fa-solid fa-arrow-right-from-bracket mr-3 md:mr-0" />
              <span className="md:hidden">LOGOUT</span>
            </NavLink>
          </li>
        </main>
      </div>
    </aside>
  );
}
