import React, { Component, PropTypes } from 'react';

import Audio from './Audio';
import VideoComponent from './VideoComponent';
import Image from './Image';
import ImageDupla from './ImageDupla';
import ImageTripla from './ImageTripla';
import Frase from './Frase';
import FraseImage from './FraseImage';

import './Pieces.css';

export default class Piece extends Component {
  render() {
    const { title, type, file, classe, text } = this.props;
    // const minhaClasse = "center " + classe;

    let Piece;
    if (type === 'audio') {
      Piece = (
        <Audio
          title={title}
          file={file}
          text={text}
        />
      )
    } else if (type === 'video') {
      Piece = (
        <VideoComponent
          title={title}
          file={file}
        />
      )
    } else if (type === 'image') {
      Piece = (
        <Image
          title={title}
          file={file}
        />
      )
    } else if (type === 'imagedupla') {
      Piece = (
        <ImageDupla
          title={title}
          text={text}
          file={file}
          type={type}
        />
      )
    } else if (type === 'imagetripla') {
      Piece = (
        <ImageTripla
          title={title}
          text={text}
          file={file}
          type={type}
        />
      )
    } else if (type === 'imagefull') {
      Piece = (
        <img src={file} style={{verticalAlign: 'middle', maxWidth: '100%', height: 'auto'}} alt={title} />
      )
    } else if (type === 'frase'){
      Piece = (
        <Frase
          title={title}
          file={file}
          text={text}
        />
      )
    } else if (type === 'fraseimage'){
      Piece = (
        <FraseImage
          title={title}
          file={file}
          text={text}
        />
      )
    } else {
      Piece = null
    }


    return (
      <section className={`center ` + classe}>
          {Piece}
      </section>
    );
  }
}

Piece.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string.isRequired,
  classe: PropTypes.string
};
