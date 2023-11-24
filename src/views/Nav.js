import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Nav.scss";
import { link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink activeClassName="active" to="/" exact={true}>
                Home
            </NavLink>
            <NavLink to="/timer">Timer App</NavLink>
            <NavLink to="/todo">Todos App</NavLink>
            <NavLink to="/blog">Blogs App</NavLink>
            <NavLink to="/secret">Secret</NavLink>
        </div>
    );
};

export default Nav;
