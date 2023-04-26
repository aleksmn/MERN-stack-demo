import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container">
                    <Link to="/" className="navbar-brand" id="site-logo">MyCards</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
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