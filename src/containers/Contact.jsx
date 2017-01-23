import React, { Component } from 'react';

import './Contact.css';
import Mapa from '../components/Mapa';
import Form from '../components/Form';

export default class Contact extends Component {
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
    const { radio, form, mapa } = this.state;

    const active = radio ? 'active' : ' ';
    const opacity = form ? '' : 'opacity';
    const mapi = mapa ? 'mapa-ativo' : 'mapa';
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
          <Form />
      </div>


      <div id="map" className={`clearfix ${mapi}`}>
        <Mapa lat={-23.6174691} lng={-46.6826591} />
      </div>

  </section>

    );
  }
}
