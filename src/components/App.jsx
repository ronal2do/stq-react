import React, { Component } from 'react';

import './App.css';

import Contact from '../containers/Contact';

import Header from '../components/header';
import Navigation from '../components/navigation';

import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <div className="navigation-overlay"></div>
        {this.props.children}
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
