import React from 'react';
import faker from 'faker';


const CommentDetail = () => {

  return (

    <div className="comment">
      <a href="/" className="avatar" >
        <img alt="avatar" src={faker.image.avatar()} />
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
