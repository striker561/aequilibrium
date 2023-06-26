import React, { Component } from 'react';

import MenuIcon from '@mui/icons-material/Menu';

class Header extends Component {

    HeaderTitle({ title }) {
        return (
            <a className="navbar-brand mt-2" href="./">
                <h2 className="balance-text" title="Latin word for equilibrium, A perfect equality, reciprocity.">
                    {title}
                </h2>
            </a>
        );
    }

    HeaderButton() {
        return (
            <button className="navbar-toggler text-light nav-right" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="material-icons">
                    <MenuIcon />
                </span>
            </button>
        )
    }

    HeaderLinks({ link, text }) {
        return (
            <li className="nav-item mt-2"><a href={link}>{text}</a></li>
        )
    }

    HeaderLinksContainer = () => {
        return(
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav main-menu ml-auto text-center mt-2">
                    <this.HeaderLinks link="#" text="About" />
                    <this.HeaderLinks link="#" text="Contact" />
                </ul>
            </div>
        )
    }

    render() {
        return (
            <header className="header bg-black">
                <nav className="navbar navbar-expand-lg align-items-center">
                    <this.HeaderTitle title="Aequilibrium"/>
                    <this.HeaderButton/>
                    <this.HeaderLinksContainer/>
                </nav>
            </header>
        );
    }
}

export default Header;
