import React, { Component } from 'react';
// eslint-disable-next-line
import { Parallax, Background } from 'react-parallax';
import { Link } from 'react-router';

import './Parallax.css';

class Section extends Component {
  render() {
    const { campaign } = this.props
    return (
      <Parallax
        strength={400}
        log={true}
        bgImage={campaign.image} >
        <div className="container">
          {this.props.children}
          <Link className="h2" to={`/campanhas/${campaign._id}`}>[+]</Link>
        </div>

      </Parallax>
    );
  }
}

export default Section;
