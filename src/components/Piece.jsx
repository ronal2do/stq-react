import React, { Component } from 'react';

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
    const { piece } = this.props;

    let Piece;
    if (piece.type === 'audio') {
      Piece = (
        <Audio
          title={piece.title}
          file={piece.file}
          text={piece.text}
        />
      )
    } else if (piece.type === 'video') {
      Piece = (
        <VideoComponent
          title={piece.title}
          file={piece.file}
        />
      )
    } else if (piece.type === 'image') {
      Piece = (
        <Image
          title={piece.title}
          file={piece.file}
        />
      )
    } else if (piece.type === 'imagedupla') {
      Piece = (
        <ImageDupla
          title={piece.title}
          text={piece.text}
          file={piece.file}
          type={piece.type}
        />
      )
    } else if (piece.type === 'imagetripla') {
      Piece = (
        <ImageTripla
          title={piece.title}
          text={piece.text}
          file={piece.file}
          type={piece.type}
        />
      )
    } else if (piece.type === 'imagefull') {
      Piece = (
        <img src={piece.file} style={{verticalAlign: 'middle', maxWidth: '100%', height: 'auto'}} alt={piece.title} />
      )
    } else if (piece.type === 'frase'){
      Piece = (
        <Frase
          title={piece.title}
          file={piece.file}
          text={piece.text}
        />
      )
    } else if (piece.type === 'fraseimage'){
      Piece = (
        <FraseImage
          title={piece.title}
          file={piece.file}
          text={piece.text}
        />
      )
    } else {
      Piece = null
    }


    return (
      <section className={`center ` + piece.classe}>
          {Piece}
      </section>
    );
  }
}
