import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJob } from '../actions/index';

import './Campanha.css';

import Piece from '../components/Piece';

class Campanha extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }
  componentWillMount() {
    this.props.fetchJob(this.props.params.id);
  }
  render() {
    const job = this.props.job;

    if (!this.props.job) {
       return <div>is loading...</div>;
    }
    const bgImage = { backgroundImage: 'url(/images/site/' + job.slug + '.jpg)' };

    return (
      <div>
        <section id="qqr" className="hero padded dark center nav-trigger text-left poster" style={bgImage}>
          <div className="container overlay-azul padding inner-titulo segundo-titulo">
              <div className="segundo-titulo">
                  <div className="padding"></div>
                  <div className="padding"></div>
                  <h2 className="titulo verde">{job.title}</h2>
                  <p className="branco maior">_</p>
                  <p className="branco"></p>
                  <h4 className="branco">{job.title}<br /></h4>
                  <p><span className="branco maior">{job.slogan}.<br />_<br />_</span></p>
              </div>
          </div>
          <a className="icon-scroll skrollable skrollable-between" href="#section2" data-0="opacity: 1;" data-100="opacity: 0;" style={{opacity: '1'}}>
              [v]
          </a>
      </section>
        {job.pieces.map(pieces => {
          return (
            <Piece
              key={pieces._id}
              title={pieces.title}
              type={pieces.type}
              file={pieces.file}
              classe={pieces.classe}
              text={pieces.text}
            />
          )
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { job: state.jobs.job }
}

export default connect(mapStateToProps, { fetchJob })(Campanha);
