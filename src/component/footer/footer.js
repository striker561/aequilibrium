import React from "react";

function Footer(){
    return (
        <footer>
            <div className="bg-black p-5">
                <div className="container d-flex flex-column text-center">
                    <div className="socials">
                        <a className="text-light" href="https://www.linkedin.com/in/michael-chidera-7854aa235" target="_blank" rel="noopener noreferrer">
                            <i className="devicon-linkedin-plain"></i>
                        </a>
                        <a className="text-light" href="http://github.com/striker561" target="_blank" rel="noopener noreferrer">
                            <i className="devicon-github-plain"></i>
                        </a>
                    </div>
                    <div>
                        <span>&copy; 2023 Aequilibrium</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;