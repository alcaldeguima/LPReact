import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="center two-columns" id="#">
          <h1>Dev Stuy</h1>
          <ul>
            <li>
              <a href="#">
                Sobre
                <div className="line-heading"></div>
              </a>
            </li>
            <li>
              <a href="#membros">
                Membros
                <div className="line-heading"></div>
              </a>
            </li>
            <li>
              <a href="#contato">
                Contato
                <div className="line-heading"></div>
              </a>
            </li>
          </ul>
        </nav>
        <div className="line-header"></div>
      </header>
    );
  }
}
export default Header;
