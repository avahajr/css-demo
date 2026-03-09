import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <NavLink className="navbar-brand" to="/">CSS Demo</NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#mainNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mainNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/bootstrap">Bootstrap</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/flex">Flexbox</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/grid">Grid</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

