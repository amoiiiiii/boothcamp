import React, { Component } from 'react';
import unsplashApi from './unsplashApi'; // Import instance Axios dari file unsplashApi.js
import './UnsplashPhotos.css'; // File CSS untuk styling

class UnsplashPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: null,
      loading: false,
      error: null,
      searchTerm: '', // Tambah state untuk menyimpan kata kunci pencarian
      searchResults: [], // State untuk menyimpan hasil pencarian
    };
  }

  componentDidMount() {
    this.fetchRandomPhoto(); // Memuat foto acak saat komponen dimuat
  }

  fetchRandomPhoto = () => {
    this.setState({ loading: true });
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

  handleSearchInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearchSubmit = () => {
    const { searchTerm } = this.state;

    if (searchTerm.trim() === '') {
      alert('Please enter a search term');
      return;
    }

    this.setState({ loading: true });

    // Memanggil API Unsplash dengan kata kunci pencarian
    unsplashApi.get('/search/photos', {
      params: { query: searchTerm },
    })
      .then(response => {
        console.log('Data respons:', response.data); // Tampilkan respons API di console

        // Simpan hasil pencarian ke dalam state
        this.setState({ searchResults: response.data.results, loading: false, error: null });
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
        this.setState({ error: error.message, loading: false });
      });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleSearchSubmit();
    }
  };

  render() {
    const { loading, error, searchTerm, searchResults } = this.state;

    return (
      <div className="unsplash-photos-container">
        <h4>Unsplash Gallery</h4>

        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Enter search term..."
            value={searchTerm}
            onChange={this.handleSearchInputChange}
            onKeyPress={this.handleKeyPress} // Handle search on Enter key press
          />
          <button className="search-button" onClick={this.handleSearchSubmit}>Search</button>
        </div>

        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}

        {/* Tampilkan hasil pencarian dalam bentuk grid */}
        <div className="photo-grid">
          {!loading && searchResults.length > 0 && searchResults.map(result => (
            <div key={result.id} className="photo-item">
              <img src={result.urls.small} alt={result.alt_description} />
            </div>
          ))}

        
        </div>
      </div>
    );
  }
}

export default UnsplashPhotos;
