import React, { Component } from 'react';

import './Contact.css';
import Mapa from '../components/Mapa';
import Form from '../components/Form';

export default class Contact extends Component {
  state = {
    radio: false,
    form: true,
    mapa: false
  };

  constructor(props) {
    super(props);

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
            <Form />
        </div>


        <div id="map" className={`clearfix ${mapa}`}>
          <Mapa lat={-23.5985647} lng={-46.6822518} />
        </div>

      </section>

    );
  }
}
