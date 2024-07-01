import React, { Component } from 'react';
import unsplashApi from './unsplashApi'; // Import instance Axios dari file unsplashApi.js

class UnsplashPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    // Memanggil API Unsplash untuk mendapatkan daftar foto
    unsplashApi.get('/photos')
      .then(response => {
        console.log('Data respons:', response.data); // Tampilkan respons API di console
        // Pilih foto pertama dari array response.data
        const randomIndex = Math.floor(Math.random() * response.data.length);
        const randomPhoto = response.data[randomIndex];
        this.setState({ photo: randomPhoto, loading: false });
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { photo, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h1>Random Unsplash Photo</h1>
        {photo && (
          <div className="photo-item">
            <img src={photo.urls.small} alt={photo.alt_description} />
            <div className="photo-details">
              <p>{photo.description || 'No description'}</p>
              <p>By: {photo.user.name}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default UnsplashPhotos;
