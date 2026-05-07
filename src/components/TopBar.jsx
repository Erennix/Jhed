import { Link, NavLink } from "react-router-dom";

export default function TopBar() {
  return (
    <header className="topbar">
      <Link className="brand" to="/">
        Happy 18th Birthday
      </Link>
      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : undefined)}>
          Home
        </NavLink>
        <NavLink to="/poem" className={({ isActive }) => (isActive ? "active" : undefined)}>
          Poem
        </NavLink>
        <NavLink to="/message" className={({ isActive }) => (isActive ? "active" : undefined)}>
          Message
        </NavLink>
        <NavLink to="/memories" className={({ isActive }) => (isActive ? "active" : undefined)}>
          Memories
        </NavLink>
        <NavLink to="/family" className={({ isActive }) => (isActive ? "active" : undefined)}>
          Special Page
        </NavLink>
      </nav>
    </header>
  );
}
