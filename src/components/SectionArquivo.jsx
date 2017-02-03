import React, { Component } from 'react';
// eslint-disable-next-line
import { Parallax, Background } from 'react-parallax';
import { Link } from 'react-router';

import image from '../images/portfolio/arquivo/01.jpg';

import './Parallax.css';

class SectionArquivo extends Component {
  render() {

    return (
      <Parallax
        strength={400}
        log={true}
        bgImage={image} >
        <div className="container">
          {this.props.children}
          <Link className="h2" to="/arquivo">[+]</Link>
        </div>
      </Parallax>
    );
  }
}

export default SectionArquivo;
