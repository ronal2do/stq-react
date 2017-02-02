import React, { Component } from 'react';

import { getCampaignsList } from '../utils/api';

import './Campanha.css';

// import Piece from '../components/Piece';

class Campanha extends Component {
  state = { campaign: [], isLoading: true }

  componentDidMount() {
    const { _id } = this.props.params;

    this.getCampaign(_id);
    console.log(this.getCampaign(_id));
  }

  getCampaign = async (_id) => {
    console.log('vamos buscar');
    try {
      const { campaign } = await getCampaignsList(_id);
      console.log('try ==> ', campaign);
      this.setState({
        campaign: {
          ...campaign,
          // image: getImageUrl(campaign.image),
        },
        isLoading: false,
      });
    } catch (err) {
      console.log('GET Campaign err:', err);

      this.setState({
        isLoading: false,
      });

      this.context.showSnackbar({
        message: err.message,
      });
    }
  };

  render() {
    const { campaign, isLoading } = this.state;

    if (isLoading) {
       return <div>is loading...</div>;
    }

    const bgImage = { backgroundImage: `url(${campaign.image})` };

    return (
      <div>
        <section id="qqr" className="hero padded dark center nav-trigger text-left poster" style={bgImage}>
          <div className="container overlay-azul padding inner-titulo segundo-titulo">
              <div className="segundo-titulo">
                  <div className="padding"></div>
                  <div className="padding"></div>
                  <h2 className="titulo verde">{campaign.title}</h2>
                  <p className="branco maior">_</p>
                  <p className="branco"></p>
                  <h4 className="branco">{campaign.title}<br /></h4>
                  <p><span className="branco maior">{campaign.slogan}.<br />_<br />_</span></p>
              </div>
              <div className="center">
                <a className="icon-scroll skrollable skrollable-between" href="#section2" style={{opacity: '1'}}>
                    [v]
                </a>
              </div>
          </div>

      </section>

      { campaign.result ? (
        <div className="container">
            <div className="row">
              <div className="col-sm-4 wow fadeInUp animated"
                  style={{visibility:'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
                  <div className="segundo-titulo">
                      <div className="padding"></div>
                      <div className="padding"></div>
                      <p className="azul maior">_</p>
                      <p className="azul"></p>
                      <h4 className="azul" style={{color: 'white'}}>Desafio<br/></h4>
                      <p><span className="azul maior" style={{color: 'white'}}>{campaign.challenge}<br/>_<br/>_</span></p>
                  </div>
              </div>
                <div className="col-sm-4 wow fadeInUp animated"
                    style={{visibility:'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
                    <div className="segundo-titulo">
                        <div className="padding"></div>
                        <div className="padding"></div>
                        <p className="azul maior">_</p>
                        <p className="azul"></p>
                        <h4 className="azul" style={{color: 'white'}}>Ação<br/></h4>
                        <p><span className="azul maior" style={{color: 'white'}}>{campaign.action}<br/>_<br/>_</span></p>
                    </div>
                </div>
                <div className="col-sm-4 wow fadeInUp animated"
                    style={{visibility:'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
                    <div className="segundo-titulo">
                        <div className="padding"></div>
                        <div className="padding"></div>
                        <p className="azul maior">_</p>
                        <p className="azul"></p>
                        <h4 className="azul" style={{color: 'white'}}>Resultado<br/></h4>
                        <p><span className="azul maior" style={{color: 'white'}}>{campaign.result}<br/>_<br/>_</span></p>
                    </div>
                </div>
            </div>
            <div className="padding-cem"></div>
        </div>
        ):(
          <div className="container">
              <div className="row">
                <div className="col-sm-6 wow fadeInUp animated"
                    style={{visibility:'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
                    <div className="segundo-titulo">
                        <div className="padding"></div>
                        <div className="padding"></div>
                        <p className="azul maior">_</p>
                        <p className="azul"></p>
                        <h4 className="azul" style={{color: 'white'}}>Desafio<br/></h4>
                        <p><span className="azul maior" style={{color: 'white'}}>{campaign.challenge}<br/>_<br/>_</span></p>
                    </div>
                </div>
                  <div className="col-sm-6 wow fadeInUp animated"
                      style={{visibility:'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
                      <div className="segundo-titulo">
                          <div className="padding"></div>
                          <div className="padding"></div>
                          <p className="azul maior">_</p>
                          <p className="azul"></p>
                          <h4 className="azul" style={{color: 'white'}}>Ação<br/></h4>
                          <p><span className="azul maior" style={{color: 'white'}}>{campaign.action}<br/>_<br/>_</span></p>
                      </div>
                  </div>
              </div>
              <div className="padding-cem"></div>
          </div>
      )}

      {/* {!isLoading ? (
        <div>
          {campaign.pieces.map((piece, key) => {
            return campaign.pieces.length > 0 ? ( <Piece key={piece._id} piece={piece} /> ) : <div className="container"><p>Sem dados</p></div> ;
          })}
        </div>
        ) :null} */}
      </div>
    );
  }
}

export default Campanha;
