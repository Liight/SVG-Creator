import React, { Component } from "react";

import "./footer.css";

class Footer extends Component {
  render() {
    let date = new Date().getFullYear();
    return (
      
      <div className="footer">&#9400; Todd Hynes {date}</div>
    );
  }
}


export default Footer;