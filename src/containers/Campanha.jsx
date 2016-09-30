import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Campanha.css';

class Campanha extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
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
                  <h4 className="branco">Somos São Bernardo.<br /></h4>
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

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Campanha);
