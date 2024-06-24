import React from 'react';
import ReactDOM from 'react-dom';
import Header1 from './Header1';
import Navbar from './Navbar'; // Import komponen Navbar
import './index.css'; // Import file CSS untuk global styling
// import Header2 from './Header2';
import Comment from './Comment';


ReactDOM.render(<Header1 />, document.getElementById('header1'));
ReactDOM.render(<Navbar />, document.getElementById('navbar'));
// ReactDOM.render(<Header2 />, document.getElementById('header2'))
ReactDOM.render(<Comment />, document.getElementById('root'));
