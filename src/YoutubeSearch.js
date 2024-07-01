import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './YoutubeSearch.css'; // Import file CSS untuk gaya komponen
import youtubeLogo from './youtube_logo.svg'; // Import SVG logo YouTube

const API_KEY = 'AIzaSyBYZcLBrLEBLYGSiMRlzey1quIhqC1de_Y';

const YoutubeSearch = () => {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false); // State untuk mengontrol apakah video sedang diputar

  useEffect(() => {
    const fetchData = async () => {
      if (query.trim() === '') {
        setVideos([]);
        setSelectedVideo(null);
        return;
      }

      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: API_KEY,
            part: 'snippet',
            maxResults: 8,
            q: query,
            type: 'video',
          }
        });
        console.log('Response from YouTube API:', response.data.items);
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
      } catch (error) {
        console.error('Error fetching videos from YouTube API:', error);
      }
    };

    fetchData();
  }, [query]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    setIsPlaying(true); // Memainkan video saat thumbnail diklik
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Memperbarui query untuk memicu useEffect
    setQuery(event.target.elements.search.value);
  };

  return (
    <div className="youtube-search-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
        {/* Isi path dan elemen SVG lainnya */}
      </svg>
      <form onSubmit={handleSubmit} className="search-form">
        <img src={youtubeLogo} alt="YouTube Logo" className="youtube-logo" />
        <input
          type="text"
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for videos..."
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="video-and-thumbnails">
        <div className="video-player">
          {selectedVideo && (
            <>
              <iframe
                width="100%" /* Ubah lebar iframe agar responsif */
                height="400" /* Tinggi iframe */
                src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}${isPlaying ? '?autoplay=1' : ''}`}
                title={selectedVideo.snippet.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <h2>{selectedVideo.snippet.title}</h2>
              <p>{selectedVideo.snippet.description}</p>
            </>
          )}
        </div>
        <div className="thumbnail-list">
          {videos.map(video => (
            <div key={video.id.videoId} className="thumbnail-item" onClick={() => handleVideoSelect(video)}>
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="thumbnail"
              />
              <div className="thumbnail-text">
                <h3>{video.snippet.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YoutubeSearch;
