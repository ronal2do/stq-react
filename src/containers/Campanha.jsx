import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJob } from '../actions/index';

import './Campanha.css';

class Campanha extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }
  componentWillMount() {
    this.props.fetchJob(this.props.params.slug);
  }
  render() {
    const job = this.props.job;

    if (!this.props.job) {
       return <div>is loading...</div>;
    }

    return (
      <div>
        <section id="qqr" className="hero padded dark center nav-trigger text-left poster" style={{backgroundImage: 'url(images/site/somos.jpg)'}}>
          <div className="container overlay-azul padding inner-titulo segundo-titulo">
              <div className="segundo-titulo">
                  <div className="padding"></div>
                  <div className="padding"></div>
                  <h2 className="titulo verde">_somos sbc</h2>
                  <p className="branco maior">_</p>
                  <p className="branco"></p>
                  <h4 className="branco">{job.title}<br /></h4>
                  <p><span className="branco maior">Somos participação.<br />_<br />_</span></p>
              </div>
          </div>
          <a className="icon-scroll skrollable skrollable-between" href="#section2" data-0="opacity: 1;" data-100="opacity: 0;" style={{opacity: '1'}}>
              [v]
          </a>
      </section>
          <h2 style={{background: '#dbe933', color: '#002b45', height: '50vh'}}>Job</h2>
          <h3 style={{height: '50vh'}}>Job</h3>
          <h4 style={{background: '#dbe933', color: '#002b45', height: '50vh'}}>Job</h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { job: state.jobs.job }
}

export default connect(mapStateToProps, { fetchJob })(Campanha);
