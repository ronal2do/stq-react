import React, { Component } from 'react';
// eslint-disable-next-line
import { Parallax, Background } from 'react-parallax';
import { Link } from 'react-router';

import './Parallax.css';

class Section extends Component {

  render() {
    return (
      <Parallax
        strength={400}
        log={true}
        bgImage={this.props.bg} >
        <div className="container">
          {this.props.children}
          <Link className="h2" to={this.props.slug}>[+]</Link>
        </div>

      </Parallax>
    );
  }
}

export default Section;
