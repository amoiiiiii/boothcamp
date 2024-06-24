import React, { Component } from 'react';
import { Comments } from './CommentData'; // Mengimpor array Comments dari file CommentData
import { faker } from '@faker-js/faker';

// Komponen CommentComponent yang menerima props name, date, text, dan avatar
const CommentComponent = ({ name, date, text, avatar }) => (
  <div className="comment">
    <a className="avatar">
      <img src={avatar || faker.image.avatar()} alt="avatar" />
    </a>
    <div className="content">
      <a className="author">{name}</a>
      <div className="metadata">
        <span className="date">{date}</span>
      </div>
      <div className="text">{text}</div>
      <div className="actions">
        <a className="reply">Reply</a>
      </div>
    </div>
  </div>
);

class Comment extends Component {
  render() {
    return (
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>
        {/* Menggunakan map untuk menampilkan setiap objek dalam array Comments */}
        {Comments.map((comment, index) => (
          <CommentComponent key={index} {...comment} />
        ))}
      </div>
    );
  }
}

export default Comment;
