import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container">
                <NavLink className="navbar-brand" to="/">CSS Demo</NavLink>
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/flex">Flexbox</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/bootstrap">Bootstrap</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/grid">Grid</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

