import React, { Component } from "react";
import Posts from "../Posts/Posts";
import postimage from "../../images/post.jpg";

const posts = [
  {
    user: "Vishal642",
    uploadTime: "2d",
    audio: "Original audio",
    src: postimage,
    caption: "Here's a picture clicked by me!",
    comments: [
      {
        user: "parax._. 390",
        comment: "Great click!",
      },
      {
        user: "vashuag9",
        comment: "Awesome Keep It up ;)",
      },
    ],
  },
  {
    user: "vashuag9",
    uploadTime: "1d",
    audio: "Original audio",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsxkI07nHexe_9vS8jw7OKUzSFQzTuZv77VA&usqp=CAU" ,
    caption: "Letting you watch this world by my eye",
    comments: [
      {
        user: "Vishal642",
        comment: "Wishing You Luck",
      },
      {
        user: "parax._. 390",
        comment: "Nicee!",
      },
      {
        user: "chaitanya",
        comment: "Good!"
      }
    ],
  },
  {
    user: "Vishal642",
    uploadTime: "2d",
    audio: "Original audio",
    src: postimage,
    caption: "Here's a picture clicked by me!",
    comments: [
      {
        user: "parax._. 390",
        comment: "Great click!",
      },
      {
        user: "vashuag9",
        comment: "Awesome Keep It up ;)",
      },
    ],
  },
  {
    user: "vashuag9",
    uploadTime: "1d",
    audio: "Original audio",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsxkI07nHexe_9vS8jw7OKUzSFQzTuZv77VA&usqp=CAU" ,
    caption: "Letting you watch this world by my eye",
    comments: [
      {
        user: "Vishal642",
        comment: "Wishing You Luck",
      },
      {
        user: "parax._. 390",
        comment: "Nicee!",
      },
      {
        user: "chaitanya",
        comment: "Good!"
      }
    ],
  },
];

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {posts.map((item, index) => {
          return <Posts key={index} post={item} comments={item.comments}/>;
        })}
      </div>
    );
  }
}

export default MainPage;
