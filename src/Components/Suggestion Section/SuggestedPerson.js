import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import "./Suggestion.css";

class Suggestion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sugg__people" style={{ display: "block" }}>
        <div className="sugg__profilpic">
          <Avatar src={this.props.data.src} alt="img" />
        </div>
        <div className="sugg__profileinfo">
          <div className="sugg__profildata">
            <div className="sugg__username">{this.props.data.username}</div>
            <div className="sugg__name">Followed by {this.props.data.followedBy}</div>
          </div>
          <div className="follow-btn">Follow</div>
        </div>
      </div>
    );
  }
}

export default Suggestion;
