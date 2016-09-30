import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radio: false,
      form: true,
      mapa: false
    };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange() {
    this.setState({
      radio: !this.state.radio,
      form: !this.state.form,
      mapa: !this.state.mapa
    });
  }

  render() {
    const active = this.state.radio ? 'active' : ' ';
    const opacity = this.state.form ? '' : 'opacity';
    const mapa = this.state.mapa ? 'mapa-ativo' : 'mapa';
    return (
      <section id="contato" className="contact center">

      <div className="switch dark">
          <button
            onClick={this.handleChange}
            className={`radio ${active}`}>
              <span className="elipse"></span>
          </button>
          <h5>Mapa</h5>
      </div>

      <div className={`map-overlay padded dark ${opacity}`} >
          <div className="container">
              <div className="row" >
                  <div className="col-xs-12 col-lg-10 col-lg-offset-1" style={{textTransform: 'lowercase'}}>
                     <form method="POST" action="http://localhost:8000/api/mensagems" name="contactform" id="contactform">

                          <fieldset>
                              <div className="float-left">
                                  <div className="form-field name wow fadeInUp">
                                     <div style={{padding:'10px'}}></div>
                                      <span><input type="text"
                                                   name="nome"
                                                   placeholder="_Nome" required/></span>
                                  </div>
                                  <div className="form-field email wow fadeInUp">
                                       <div style={{padding:'10px'}}></div>
                                      <span><input type="email"
                                                   name="email"
                                                   placeholder="_E-mail" required /></span>
                                  </div>
                              </div>
                              <div className="float-right">
                                  <div className="form-field message wow fadeInUp" style={{height: '159px'}}>
                                       <div style={{padding:'10px'}}></div>
                                      <span><textarea name="mensagem" id="message"
                                                placeholder="_Mensagem"></textarea></span>
                                  </div>
                              </div>
                          </fieldset>

                          <div className="form-click wow fadeInUp" data-wow-delay="1s">
                              <button type="submit"
                              >enviar</button>
                          </div>
                              <div className="padding"></div>


                            <div className="row text-left" style={{ textAlign: 'left'}}>
                              <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 left">
                                  <p>_</p>
                                  <p>rua gomes de carvalho 921, 5º andar _são paulo</p>
                                  <p>+55 11 2337-2341<br />_<br />contato@stqpublicidade.com.br<br />_<br />_</p>
                              </div>
                          </div>
                    </form>
                  </div>
              </div>
          </div>
      </div>


      <div id="map" className={`clearfix ${mapa}`} style={{background: 'green'}}>
        <div style={{ background: 'red', height: '100%', width: '100%' }}/>
      </div>

  </section>

    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
