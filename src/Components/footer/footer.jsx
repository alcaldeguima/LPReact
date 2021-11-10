import React, { Component } from "react";
import "./footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div>
          <h1>Dev Stuy</h1>
          <p>Copyright &copy; 2021 | Dev Stuy</p>
          <div className="line-footer"></div>
        </div>
      </footer>
    );
  }
}
export default Footer;
