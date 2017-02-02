import React, { Component } from 'react';

import './App.css';
import Contact from '../containers/Contact';
import Header from '../components/header';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
