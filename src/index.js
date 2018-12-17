import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
return (
  <div className="ui container comments">
    <ApprovalCard>
      <CommentDetail avatar = {faker.image.avatar()} />
    </ ApprovalCard>
 </div>


);

};

ReactDOM.render( < App / > , document.querySelector('#root'));
