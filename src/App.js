import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
//import Pdf from './Pdf.js';
import MyPdfViewer from './MyPdfViewer.js';

class App extends Component {
  render() {
    return (
    <div className="App">
        <Router>
          <div>
            <button>
              <Link to='/pdf'>PDF Viewer</Link>
            </button>
            <button>
              <Link to='/'>Home</Link>
            </button>
            <button>
              <Link to='/video'>Video player</Link>
            </button>
            <Route exact path="/" component={Home} />
            <Route path="/pdf" component={MyPdfViewer} />
            <Route path ="/video" component={Video} />
          </div>
        </Router>
    </div>
);
  }
}

const Home = () => <h2>Home</h2>;
const Video = () => <h2>Video Player</h2>;

export default App;
