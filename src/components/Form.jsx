import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createContact } from '../actions/index';

class Form extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    console.log(props);
    this.props.createContact(props)
      .then(() => {
        this.context.router.push("/");
      });
  }

  render() {
    const { fields: { name, email, message }, handleSubmit } = this.props;

    return (
      <div className="container">
          <div className="row" >
              <div className="col-xs-12 col-lg-10 col-lg-offset-1" style={{textTransform: 'lowercase'}}>

                 <form onSubmit={handleSubmit(this.onSubmit.bind(this))} name="contactform" id="contactform">

                      <fieldset>
                          <div className="float-left">
                              <div className="form-field name wow fadeInUp">
                                 <div style={{padding:'10px'}}></div>
                                  <span>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="_Nome"
                                        {...name}
                                    /></span>
                                   <div className="text-help">
                                      {name.touched ? name.error : ''}
                                    </div>
                              </div>
                              <div className="form-field email wow fadeInUp">
                                  <span>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="_E-mail"
                                        {...email}
                                    /></span>
                                  <div className="text-help">
                                    {email.touched ? email.error : ''}
                                  </div>
                              </div>
                          </div>
                          <div className="float-right">
                              <div className="form-field message wow fadeInUp">
                                   <div style={{padding:'10px'}}></div>
                                  <span>
                                    <textarea
                                      name="message"
                                      placeholder="_Mensagem"
                                      {...message}
                                    ></textarea>
                                  </span>
                                  <div className="text-help">
                                     {message.touched ? message.error : ''}
                                   </div>

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

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Entre com um nome válido';
  }
  if (!values.email) {
    errors.email = 'Entre com um email válido';
  }
  if (!values.message) {
    errors.message = 'Insira sua mensagem';
  }
  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['name', 'email', 'message'],
  validate
}, null, { createContact })(Form);
