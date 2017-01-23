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
    const { job } = this.props;

    if (!job) {
       return <div>is loading...</div>;
    }
    const bgImage = { backgroundImage: `url(${job.cover})`, flexDirection: 'column'};

    return (
      <div>
        <section id="qqr" className="hero padded dark center nav-trigger text-left poster" style={bgImage}>
          <div className="overlay-azul padding inner-titulo segundo-titulo">
              <div className="segundo-titulo">
                  <div className="padding"></div>
                  <div className="padding"></div>
                  <h2 className="titulo verde">{job.title}</h2>
                  <p className="branco maior">_</p>
                  <p className="branco"></p>
                  <h4 className="branco">{job.title}<br /></h4>
                  <p><span className="branco maior">{job.slogan}.<br />_<br />_</span></p>
              </div>
              <div className="center">
                <a className="icon-scroll skrollable skrollable-between" href="#section2" style={{opacity: '1'}}>
                    [v]
                </a>
              </div>
          </div>
      </section>

      <section className="fundo-branco">
        {job.result ? (
          <div className="container">
                <div className="padding"></div>
                <div className="row">
                  <div className="col-sm-4 wow fadeInUp animated"
                      style={{visibility:'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
                      <div className="segundo-titulo">
                          <div className="padding"></div>
                          <div className="padding"></div>
                          <p className="azul maior">_</p>
                          <p className="azul"></p>
                          <h4 className="azul">Desafio<br/></h4>
                          <p><span className="azul maior">{job.challenge}<br/>_<br/>_</span></p>
                      </div>
                  </div>
                    <div className="col-sm-4 wow fadeInUp animated"
                        style={{visibility:'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
                        <div className="segundo-titulo">
                            <div className="padding"></div>
                            <div className="padding"></div>
                            <p className="azul maior">_</p>
                            <p className="azul"></p>
                            <h4 className="azul">Ação<br/></h4>
                            <p><span className="azul maior">{job.action}<br/>_<br/>_</span></p>
                        </div>
                    </div>
                    <div className="col-sm-4 wow fadeInUp animated"
                        style={{visibility:'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
                        <div className="segundo-titulo">
                            <div className="padding"></div>
                            <div className="padding"></div>
                            <p className="azul maior">_</p>
                            <p className="azul"></p>
                            <h4 className="azul">Resultado<br/></h4>
                            <p><span className="azul maior">{job.result}<br/>_<br/>_</span></p>
                        </div>
                    </div>
                </div>
                <div className="padding-cem"></div>
            </div>
          ) : (
            <div className="container">
                  <div className="padding"></div>
                  <div className="row">
                    <div className="col-sm-6 wow fadeInUp animated"
                        style={{visibility:'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
                        <div className="segundo-titulo">
                            <div className="padding"></div>
                            <div className="padding"></div>
                            <p className="azul maior">_</p>
                            <p className="azul"></p>
                            <h4 className="azul">Desafio<br/></h4>
                            <p><span className="azul maior">{job.challenge}<br/>_<br/>_</span></p>
                        </div>
                    </div>
                      <div className="col-sm-6 wow fadeInUp animated"
                          style={{visibility:'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
                          <div className="segundo-titulo">
                              <div className="padding"></div>
                              <div className="padding"></div>
                              <p className="azul maior">_</p>
                              <p className="azul"></p>
                              <h4 className="azul">Ação<br/></h4>
                              <p><span className="azul maior">{job.action}<br/>_<br/>_</span></p>
                          </div>
                      </div>
                  </div>
                  <div className="padding-cem"></div>
              </div>
          )

        }
      </section>



        {job.pieces.map((piece, key) => {
          return (
            <Piece
              key={piece._id}
              piece={piece}
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
