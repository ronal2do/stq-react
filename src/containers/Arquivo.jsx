import React, { Component } from 'react';
import { css } from 'glamor';

import { getPiecesList } from '../utils/api';
import shuffle from '../utils/shuffle';

import image from '../images/portfolio/arquivo/01.jpg';

const cont = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
})

const card = css({
  width: 250,
  // flex: '1',
  height: 300,
  Background: 'red',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid white',
  BackgroundSize: 'cover',
  backgroundImage: `url('http://lorempixel.com/400/200/sports/')`,

})

class JobsList extends Component {
  state = {
    pieces: []
  }

  componentDidMount = () => {
    console.log('opa');
    this.getPieces();
  };

  getPieces = async () => {
    console.log('pega =>');
    try {
      const { pieces } = await getPiecesList();

      console.log(pieces);

      this.setState({
        pieces,
      });
    } catch(err) {
      console.log('Jobs err:', err);
    }
  };

  render() {
    const { pieces } = this.state;
    const bgImage = { backgroundImage: `url(${image})` };

    return (
      <section>
          <section id="qqr" className="hero padded dark center nav-trigger text-left poster" style={bgImage}>
            <div className="container overlay-azul padding inner-titulo segundo-titulo">
                <div className="segundo-titulo">
                    <div className="padding"></div>
                    <div className="padding"></div>
                    <h2 className="titulo verde">outros trabalhos</h2>
                    <p className="branco maior">_</p>
                    <p className="branco"></p>
                    <h4 className="branco">arquivo de peças<br /></h4>
                    <p><span className="branco maior">arquivo de peças slogan space.<br />_<br />_</span></p>
                </div>
                <div className="center">
                  <a className="icon-scroll skrollable skrollable-between" href="#section2" style={{opacity: '1'}}>
                      [v]
                  </a>
                </div>
            </div>
          </section>

          <section className={cont}>
            { shuffle(pieces).map((piece, key) => {
                return (
                    <div key={piece._id} className={card}>
                      <p style={{color: 'white'}}>{piece.title}</p>

                    </div>
                );
              })
            }
          </section>
      </section>
    );
  }
}

export default JobsList;
