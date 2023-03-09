import Avatar from "@material-ui/core/Avatar";
import React, { Component } from "react";
import "./Posts.css";
import love from "../../images/love.svg";
import comment from "../../images/comment.svg";
import share from "../../images/share.svg";
import save from "../../images/save.svg";
import Comment from "./Comment";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="post__container">
          <div className="post__header">
            <Avatar className="post__image" src="" />
            <div>
              <div className="post__username">
                {this.props.post.user} ·{" "}
                <span> {this.props.post.uploadTime} </span>
              </div>
              <div className="post__audio">{this.props.post.audio} </div>
            </div>
            <div className="post__moreoptions">...</div>
          </div>
          <div>
            <img
              src={this.props.post.src}
              alt="abc"
              width="610px"
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className="post__react">
            <div>
              <img className="post_reactimage" src={love} alt="love" />
              <img className="post_reactimage" src={comment} alt="comment" />
              <img className="post_reactimage" src={share} alt="share" />
            </div>
            <div>
              <img className="post_reactimage" src={save} alt="save" />
            </div>
          </div>
          <div className="post__likes">14,731 likes</div>
          <div className="post__footer">
            <div className="post__info">
              <div className="post__user">{this.props.post.user}</div>
              <div className="post__caption">
                {this.props.post.caption}
              </div>
            </div>
            <div className="post__viewall" style={{}}>
              View all comments
            </div>

            <div className="post__commentbox">
              {this.props.comments.map((item,index) => {
                return <Comment key={index} data={item} />;
              })}
            </div>
            <div className="post__addcomment">
              <input
                className="addcomment_input"
                type="text"
                placeholder="Add a Comment..."
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Posts;
