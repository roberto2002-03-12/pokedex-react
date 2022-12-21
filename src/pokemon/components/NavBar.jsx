import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink
                    className="navbar-brand mb-0 h1"
                    to="/"
                >
                    Pokemon
                </NavLink>
            </div>
        </nav>
    );
};