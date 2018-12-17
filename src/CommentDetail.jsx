import React from 'react';


const CommentDetail = (props) => {

  return (

    <div className="comment">
      <a href="/" className="avatar" >
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
      Achraf </a>
        <div className="metadata">
          <span className="date"> today < /span> </div>
          <div className = "post"   >
      Nice!
      </div >

       </div>
     </div >
  );
};

export default CommentDetail;
