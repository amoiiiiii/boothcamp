import React, { useState, useEffect } from 'react';
import { Comments } from './CommentData';
import { faker } from '@faker-js/faker'; 
import './Comment.css';

const CommentComponent = (props) => {
  const { name, text, avatar, likes: initialLikes } = props;
  const [likes, setLikes] = useState(initialLikes);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [currentDay, setCurrentDay] = useState(getDayName(new Date().getDay()));

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
      setCurrentDay(getDayName(new Date().getDay()));
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  function getDayName(dayIndex) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
  }

  return (
    <div className="comment">
      <a className="avatar">
        <img src={avatar || faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a className="author">{name}</a>
        <div className="metadata">
          <span className="date">{currentDay} {currentTime}</span>
          <span className="like liked-text"> | Liked: {likes}</span>
        </div>
        <div className="text">{text}</div>
        <div className="actions">
          <button className="ui mini button like-button" onClick={handleLike}>Like</button>
        </div>
      </div>
    </div>
  );
};

const CommentSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'phone') setPhone(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}`);
  };

  return (
    <div className="ui comments" style={{ marginTop: '20px' }}>
      <h3 className="ui dividing header">Comments</h3>

      {Comments.map((comment, index) => (
        <CommentComponent key={index} {...comment} />
      ))}

      <h3 className="ui dividing header">Contact Form</h3>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Name"
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Email"
          />
        </div>
        <div className="field">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handleInputChange}
            placeholder="Phone"
          />
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>    
    </div>
  );
};

export default CommentSection;
