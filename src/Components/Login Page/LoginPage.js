import React, { Component } from "react";
import insta_img from "../../images/9364675fb26a.svg";
import insta_logo from "../../images/logoinsta.png";
import fb from "../../images/fb.png";
import appstore from "../../images/app.png";
import playstore from "../../images/play.png";
import "./LoginPage.css";
import { Container } from "@material-ui/core";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}; //Explain
  }
  render() {
    return (
      <>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <div className="loginpage_main">
            <div>
              <img src={insta_img} alt="mobile_img" width="450px" />
            </div>
            <div>
              <div className="loginpage_rightcomponent">
                <img
                  className="loginpage_logo"
                  src={insta_logo}
                  alt="mobile_img"
                />
                <div className="loginpage_signin">
                  <input
                    type="text"
                    className="loginpage_text"
                    placeholder="Phone number, email or username"
                  />
                  <input
                    type="password"
                    className="loginpage_text"
                    placeholder="Password"
                  />
                  <button className="loginpage_button">Sign In</button>
                </div>
                <div className="login__ordiv">
                  <div className="login__dividor"></div>
                  <div className="login__or">OR</div>
                  <div className="login__dividor"></div>
                </div>
                <div className="login__fb">
                  <img src={fb} alt="logo" width="15px" style={{ marginRight: "5px" }} />
                  Login With Facebook
                </div>
                <div className="login_forgot">Forgotten your password?</div>
              </div>

              <div className="loginpage__signupoption">
                <div className="loginPage__signin">
                  Don't Have an Account? Sign Up
                </div>
                <div className="loginPage__downloadSection ">
                  <div className="loginPage__getapp">Get The app.</div>
                  <div className="loginPage__option">
                    <img
                      src={appstore}
                      className="loginPage_dwimg"
                      alt="appstore_img"
                      width="136px"
                    />
                    <img
                      src={playstore}
                      className="loginPage_dwimg"
                      alt="playstore_img"
                      width="136px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default LoginPage;
