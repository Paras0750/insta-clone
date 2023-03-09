import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./NavBar.css";
import insta_logo from "../../images/logoinsta.png";
import home from "../../images/home.svg";
import message from "../../images/message.svg";
import find from "../../images/find.svg";
import love from "../../images/love.svg";
import dp from "../../images/dp6.png";


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="navbar__barContent">
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={3}>
              <img
                className="navbar_logo"
                src={insta_logo}
                alt="insta logo"
                width="105px"
              />
            </Grid>
            <Grid item xs={3}>
              <input
                className="navbar__searchBar"
                type="text"
                placeholder="Search"
              />
            </Grid>
            <Grid item xs={3}>
              <img className="navbar__img" src={home} alt="home" width="25px" height="25px" />
              <img className="navbar__img" src={message} alt="message" width="25px" height="25px" />
              <img className="navbar__img" src={find} alt="find" width="25px" height="25px" />
              <img className="navbar__img" src={love} alt="love" width="25px" height="25px" />
              <img className="navbar__img" src={dp} alt="love" width="25px" height="25px" />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default NavBar;
