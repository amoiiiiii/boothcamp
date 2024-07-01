import React from 'react';
import ReactDOM from 'react-dom';
import Header1 from './Header1';
import Navbar from './Navbar';
import './index.css';
import UnsplashPhotos from './UnsplashPhotos';
import Comment from './Comment';


ReactDOM.render(<Header1 />, document.getElementById('header1'));
ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<Comment />, document.getElementById('root')); // Render Comment di dalam div dengan id root
ReactDOM.render(<UnsplashPhotos />, document.getElementById('unsplash-root')); // Render UnsplashPhotos di dalam div dengan id unsplash-root
