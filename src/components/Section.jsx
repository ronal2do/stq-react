import React, { Component } from 'react';
// eslint-disable-next-line
import { Parallax, Background } from 'react-parallax';
import { Link } from 'react-router';

import './Parallax.css';

class Section extends Component {
  render() {
    const { job } = this.props;

    return (
      <Parallax
        strength={400}
        log={true}
        bgImage={job.cover} >
        <div className="container">
          <h1 className="h1">{job.title}</h1>
          <h4 className="h4">{job.slogan}</h4>
          <Link className="h2" to={`/campanhas/${job._id}`}>[+]</Link>
        </div>
      </Parallax>
    );
  }
}

export default Section;
