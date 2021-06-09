import React, { Component, Fragment } from "react";
import AppIcon from "../../images/icon.svg";

class Logo extends Component {
  render() {
    return (
      <Fragment>
        <img src={AppIcon} alt="Logo" className="logoImage" />
        {"\u00A0"}
        {"\u00A0"}
        <div className="logoText">Ice</div>
      </Fragment>
    );
  }
}

export default Logo;
