import React, { useContext } from "react";
import { Link , useLocation , useHistory } from "react-router-dom";
import AlertContext from "../context/alert/alertContext";
import Alert from "./Alert";

const Navbar = () => {
    const location = useLocation();
    const history = useHistory();
    const { alert } = useContext(AlertContext);

    const handleLogout = () => {
        localStorage.removeItem("token");
        history.push("/login");
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        iNotebook
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${ location.pathname === "/" ? "active" : "" }`}
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${ location.pathname === "/about" ? "active" : "" }`} to="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex gap-2">
                            { !localStorage.getItem("token") ? (<><Link to="/login" className="btn btn-primary">Login</Link>
                            <Link to="/signup" className="btn btn-primary">Signup</Link></>)
                            : <button onClick={handleLogout} className="btn btn-primary"> Logout </button>
                            }
                        </div>
                    </div>
                </div>
            </nav>
            <Alert alert={alert} />
        </div>
    );
};

export default Navbar;
