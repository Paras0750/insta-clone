import React, { Component } from "react";
import "./Posts.css";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="post_comment">
          <div className="comment__user">{this.props.data.user}</div>
          <div className="comment__caption">{this.props.data.comment}</div>
        </div>
      </>
    );
  }
}

export default Comment;
