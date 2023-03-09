import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import statimg1 from "../../images/pp1.png";
import "./Suggestion.css";
import SuggestedPerson from './SuggestedPerson'
import dp from "../../images/dp6.png";


const suggData = [
{
  src: statimg1,
  username: "Ms Dhoni",
  followedBy: "parax._. 390 + 2 more",
},
{
  src: statimg1,
  username: "Abhisar Kala",
  followedBy: "rajatrana9 + 2 more",
},
{
  src: statimg1,
  username: "chinmay01",
  followedBy: "harshit89 + 2 more",
},
];

class Suggestion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sugg__container">
        <div className="sugg__personalinfo">
          <div className="sugg__profilpic">
            <Avatar src={dp} alt="img" />
          </div>
          <div>
            <div className="sugg__username">parax._. 390</div>
            <div className="sugg__name">Paras Nauriyal</div>
          </div>
        </div>

        <div className="sugg__seemore">
          <div style={{ float: "left",color: "rgb(80, 90, 90)" }}>Suggestions for you</div>
          <a href="/" style={{ marginLeft: "120px",textDecoration: "none" }}>
            See All
          </a>
        </div>

        <div className="sugg__allsugg">
          {suggData.map((item,index) => {return <SuggestedPerson key={index} data={item}/> })}
        </div>
      </div>
    );
  }
}

export default Suggestion;
