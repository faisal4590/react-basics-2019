//import the react and ReactDom libraries
import React from "react"; //React hocce variable er name.. react dependancy theke sob kusi React var e store hocce

//create a react component
const CommentDetails = props => {
  //console.log(props);
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.avatar} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">{props.timeAgo}</span>
          </div>
          <div className="text">{props.comments}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetails; //now ei component ta jekono file access korte parbe import korar maddhome
