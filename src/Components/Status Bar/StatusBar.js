import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import statimg1 from '../../images/pp1.png';
import statimg2 from '../../images/pp2.png';
import statimg3 from '../../images/pp3.jpeg';
import "./StatusBar.css";
import arrowright from "../../images/arrowright.png";

class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="statusbar__container">
          <div className="status">
            <Avatar className="statusbar__status" src={statimg1} />
            <div className="statusbar__text">User1</div>
          </div>
          <div className="status">
            <Avatar className="statusbar__status" src={statimg2} />
            <div className="statusbar__text">User2</div>
          </div>
          <div className="status">
            <Avatar className="statusbar__status" src={statimg3} />
            <div className="statusbar__text">User3</div>
          </div>
          <div className="status">
            <Avatar className="statusbar__status" src={statimg1} />
            <div className="statusbar__text">User4</div>
          </div>
          <div className="status">
            <Avatar className="statusbar__status" src={statimg2} />
            <div className="statusbar__text">User5</div>
          </div>
          <div className="status">
            <Avatar className="statusbar__status" src={statimg3} />
            <div className="statusbar__text">User6</div>
          </div>
          <div className="status">
            <Avatar className="statusbar__status" src={statimg1} />
            <div className="statusbar__text">User7</div>
          </div>
          <div className="status">
            <Avatar className="statusbar__status" src={statimg2} />
            <div className="statusbar__text">User8</div>
          </div>
          <div className="status">
            <Avatar className="statusbar__status" src={statimg3} />
            <div className="statusbar__text">User9</div>
          </div>
        
        </div>
      </div>
    );
  }
}

export default StatusBar;
