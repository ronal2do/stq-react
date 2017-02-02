import React, { Component, PropTypes } from 'react';

class Form extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    //
  }

  render() {
    return (
      <div className="container">
        <div className="row" >
          <div className="col-xs-12 col-lg-10 col-lg-offset-1" style={{textTransform: 'lowercase'}}>
            <form onSubmit={this.onSubmit.bind(this)} name="contactform">
              <fieldset>
                  <div className="float-left">
                    <div className="form-field name wow fadeInUp">
                    <div style={{padding:'10px'}}></div>
                      <span>
                        <input
                          type="text"
                          name="name"
                          placeholder="_Nome"
                        />
                      </span>
                    </div>
                    <div className="form-field email wow fadeInUp">
                      <span>
                        <input
                            type="email"
                            name="email"
                            placeholder="_E-mail"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="float-right">
                      <div className="form-field message wow fadeInUp">
                           <div style={{padding:'10px'}}></div>
                          <span>
                            <textarea
                              name="message"
                              placeholder="_Mensagem"
                            ></textarea>
                          </span>

                      </div>
                  </div>
              </fieldset>
              <div className="form-click wow fadeInUp" data-wow-delay="1s">
                <button type="submit">enviar</button>
              </div>
              <div className="padding"></div>
              <div className="row text-left" style={{ textAlign: 'left'}}>
                <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 left">
                  <p>_</p>
                  <p>rua michigan 120, _são paulo</p>
                  <p>+55 11 2337-2341<br />_<br />contato@stqpublicidade.com.br<br />_<br />_</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
