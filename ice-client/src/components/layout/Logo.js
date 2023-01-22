import React, { Component, Fragment } from "react";
import AppIcon from "../../images/icon.svg";

class Logo extends Component {
  render() {
    return (
      <div className="logoContainer">
        <div className="logoImageContainer">
          <img src={AppIcon} alt="Logo" className="logoImage" />
        </div>
        <div className="logoText">Ice</div>
      </div>
    );
  }
}

export default Logo;
