import React, { Component } from 'react';
import { Comments } from './CommentData';
import UnsplashPhotos from './UnsplashPhotos'; 
import { faker } from '@faker-js/faker'; 
import './Comment.css';
class CommentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes, // Menginisialisasi state likes dengan props
      currentTime: new Date().toLocaleTimeString(), // Menginisialisasi state currentTime dengan waktu saat ini
      currentDay: this.getDayName(new Date().getDay()), // Menginisialisasi state currentDay dengan hari saat ini
    };
  }
  // Metode ini dijalankan ketika komponen telah dipasang
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(), // Memperbarui waktu setiap detik
      1000
    );
  }
  // Metode ini dijalankan ketika komponen akan dihapus
  componentWillUnmount() {
    clearInterval(this.intervalID); // Menghapus interval waktu
  }
  // Metode untuk memperbarui waktu dan hari
  tick() {
    this.setState({
      currentTime: new Date().toLocaleTimeString(), // Memperbarui waktu
      currentDay: this.getDayName(new Date().getDay()), // Memperbarui hari
    });
  }
  // Metode untuk mendapatkan nama hari berdasarkan indeks
  getDayName(dayIndex) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
  }
  // Metode untuk menangani klik tombol Like
  handleLike = () => {
    this.setState((prevState) => ({
      likes: prevState.likes + 1, // Meningkatkan jumlah likes
    }));
  };

  render() {
    const { name, text, avatar } = this.props; // Mengambil props
    const { likes, currentTime, currentDay } = this.state; // Mengambil state

    return (
      <div className="comment">
        <a className="avatar">
          <img src={avatar || faker.image.avatar()} alt="avatar" /> {/* Menampilkan avatar */}
        </a>
        <div className="content">
          <a className="author">{name}</a> {/* Menampilkan nama penulis */}
          <div className="metadata">
            <span className="date">{currentDay} {currentTime}</span> {/* Menampilkan hari dan waktu */}
            <span className="like liked-text"> | Liked: {likes}</span> {/* Menampilkan jumlah likes */}
          </div>
          <div className="text">{text}</div> {/* Menampilkan teks komentar */}
          <div className="actions">
            <button className="ui mini button like-button" onClick={this.handleLike}>Like</button> {/* Tombol Like */}
          </div>
        </div>
      </div>
    );
  }
}
// Komponen utama untuk menampilkan daftar komentar dan form input kontak
class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: ''
    };
  }
  // Metode untuk menangani perubahan input
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  // Metode untuk menangani submit form
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, phone } = this.state;
    alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}`);
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="ui comments" style={{ marginTop: '20px' }}>
        <h3 className="ui dividing header">Comments</h3>

        {Comments.map((comment, index) => (
          <CommentComponent key={index} {...comment} />
        ))}

        <h3 className="ui dividing header">Contact Form</h3>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              placeholder="Name"
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              placeholder="Email"
            />
          </div>
          <div className="field">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={this.handleInputChange}
              placeholder="Phone"
            />
          </div>
          <button className="ui button" type="submit">Submit</button>
        </form>

        <h3 className="ui dividing header">Photo List</h3>
        <UnsplashPhotos /> {/* Menampilkan komponen PhotoList */}
      </div>
    );
  }
}


export default CommentSection; // Mengekspor komponen CommentSection
