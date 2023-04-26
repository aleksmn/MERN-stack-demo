import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link to="/" className="navbar-brand" id="site-logo">MyCards</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to="/blog" className="nav-link">Блог</NavLink>
                            <NavLink to="/contacts" className="nav-link">Контакты</NavLink>
                            <NavLink to="/about" className="nav-link">О проекте</NavLink>
                        </div>
                    </div>
                </div>
            </nav>

        </header>


    );
}

export default Navbar;