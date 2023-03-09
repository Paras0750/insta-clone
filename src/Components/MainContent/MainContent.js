import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import StatusBar from "../Status Bar/StatusBar.js";
import Mainpage from "../Main Page/MainPage";
import "./MainContent.css";
import Suggestion from "../Suggestion Section/Suggestion.js";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={2}>

          </Grid>
          <Grid item xs={6}>
            <div>
              <StatusBar />
              <Mainpage />
            </div>
          </Grid>
          <Grid item xs={3}>
            <Suggestion />
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </div>
    );
  }
}

export default MainContent;
