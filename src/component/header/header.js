import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function HeaderTitle({ title }) {
    return (
        <a className="navbar-brand mt-2" href="./">
            <h2 className="balance-text" title="Latin word for equilibrium, A perfect equality, reciprocity.">
                {title}
            </h2>
        </a>
    );
}

function HeaderButton() {
    return (
        <button className="navbar-toggler text-light nav-right" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="material-icons">
                <MenuIcon />
            </span>
        </button>
    );
}

function HeaderLinks({ link, text }) {
    return (
        <li className="nav-item mt-2"><a href={link}>{text}</a></li>
    );
}

function HeaderLinksContainer() {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav main-menu ml-auto text-center mt-2">
                <HeaderLinks link="#about" text="About" />
                <HeaderLinks link="#contact" text="Contact" />
            </ul>
        </div>
    );
}

function Header() {
    return (
        <header className="header bg-black">
            <nav className="navbar navbar-expand-lg align-items-center">
                <HeaderTitle title="Aequilibrium" />
                <HeaderButton />
                <HeaderLinksContainer />
            </nav>
        </header>
    );
}

export default Header;
