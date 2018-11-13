import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Pdf from './Pdf.js';
import MyPdfViewer from './MyPdfViewer.js';

class App extends Component {
  render() {
    return (
    <div className="App">
        <MyPdfViewer />
    </div>
);
  }
}

export default App;
