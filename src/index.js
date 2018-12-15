import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () => {
return (
  <div className="ui container comments">
  <div className="comment">
    <a href="/" className="avatar" >
      <img alt="avatar" src={faker.image.avatar()} />
    </a>
    <div className="content">
      <a href="/" className="author">
    Achraf </a>
      <div className="metadata">
        <span className="date"> 14.12 .2018 < /span> </div>
        <div className = "post"   >
    Nice!
    </div >

     </div>
   </div >
 </div>


);

};

ReactDOM.render( < App / > , document.querySelector('#root'));
