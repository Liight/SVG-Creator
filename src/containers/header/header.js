import React, { Component } from "react";

import "./header.css";

class Header extends Component {
    render() {

        const link = <div className="link-container">
            {" "}
            <a
                href="https://www.w3.org/TR/SVG2/intro.html#AboutSVG"
                target="_blank"
                rel="noopener noreferrer"
            >
                {" "}
                <img
                    alt="Salable Vector graphics"
                    src={require("../../assets/images/svgLogo.PNG")}
                    width="100%"
                    height="auto"
                />
            </a>
        </div>;

        return (

            <div className="header">
                <div className="header-line">
                    {link}
                <span className="header-text"><h1>Creator</h1></span>
                </div>
                

                <span className="header-instruction"><h2>Create and download SVG images</h2></span>
            </div>
        );
    }
}


export default Header;