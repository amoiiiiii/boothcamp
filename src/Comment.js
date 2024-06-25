import React, { Component } from 'react';
import { Comments } from './CommentData';
import { faker } from '@faker-js/faker';
import './Comment.css';

class CommentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes,
      currentTime: new Date().toLocaleTimeString(),
      currentDay: this.getDayName(new Date().getDay()),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      currentTime: new Date().toLocaleTimeString(),
      currentDay: this.getDayName(new Date().getDay()),
    });
  }

  getDayName(dayIndex) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
  }

  handleLike = () => {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
    }));
  };

  render() {
    const { name, text, avatar } = this.props;
    const { likes, currentTime, currentDay } = this.state;

    return (
      <div className="comment">
        <a className="avatar">
          <img src={avatar || faker.image.avatar()} alt="avatar" />
        </a>
        <div className="content">
          <a className="author">{name}</a>
          <div className="metadata">
            <span className="date">{currentDay} {currentTime}</span> <span className="like liked-text"> | Liked: {likes}</span>
          </div>
          <div className="text">{text}</div>
          <div className="actions">
            <button className="ui mini button like-button" onClick={this.handleLike}>Like</button>
          </div>
        </div>
      </div>
    );
  }
}

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
