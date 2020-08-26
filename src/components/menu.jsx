import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-primary sticky-top">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
        </nav>
      </React.Fragment>
    );
  }
}

export default Menu;
