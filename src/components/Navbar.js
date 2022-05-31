import {
    Link
} from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to='/news'>ALFUNDS NEWS APP</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to='/news'>
                                    News
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/archive'>
                                    Archive
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Navbar;