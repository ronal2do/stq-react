import React, { Component } from 'react';
import { css } from 'glamor';
import shuffle from '../utils/shuffle'

import px from '../images/logos/2000px-Indian_Motorcycle_logo.svg.png'
import ademi from '../images/logos/ademi.jpg'
import aaa from '../images/logos/2017-02-02.jpg'
import bb from '../images/logos/2017-02-02-1.jpg'
import atlanticahotels from '../images/logos/atlanticahotels.jpg'
import cartaz from '../images/logos/cartaz-inss-logo.png'
import Cerutti from '../images/logos/Cerutti.jpg'
import CIPESA from '../images/logos/CIPESA.jpg'
import Consorcio from '../images/logos/Consorcio-Abc.png'
import logo_marilia5 from '../images/logos/logo_marilia5.png'
import logo_MSBC from '../images/logos/logo_MSBC.gif'
import logo_p_tio_brasil_institucional_2009_JPG from '../images/logos/logo_p_tio_brasil_institucional_2009_JPG.jpg'
import logo_estado from '../images/logos/logo-estado-branco-79888d001808cea010456a8f6c0400ac.png'
import logo_pro from '../images/logos/logo-instituto-pro-saber.png'
import marca_governo from '../images/logos/marca_governo.png'
import marca_indaia from '../images/logos/marca_indaia.png'
import Marca from '../images/logos/Marca-da-Prefeitura-de-Joinville-em-JPG-horizontal.png'
import Petininho from '../images/logos/Petininho.png'
import Polaris_corpId_logos_flat_696x150 from '../images/logos/Polaris_corpId_logos_flat_696x150.png'
import prefeitura from '../images/logos/prefeitura-de-maceio-logo-horizontal.png'
import sagavw from '../images/logos/sagavw.png'
import Sem_t_tulo from '../images/logos/Sem_t_tulo.png'
import shineray from '../images/logos/shineray.png'
import aawe from '../images/logos/2017-02-02.png'

const Imgns = [
  {'id': 1, source: `${ademi}`},
  {'id': 2, source: `${px}`},
  {'id': 3, source: `${aaa}`},
  {'id': 4, source: `${atlanticahotels}`},
  {'id': 5, source: `${cartaz}`},
  {'id': 6, source: `${Cerutti}`},
  {'id': 7, source: `${CIPESA}`},
  {'id': 8, source: `${Consorcio}`},
  {'id': 9, source: `${logo_marilia5}`},
  {'id': 10, source: `${logo_MSBC}`},
  {'id': 11, source: `${logo_p_tio_brasil_institucional_2009_JPG}`},
  {'id': 12, source: `${logo_estado}`},
  {'id': 13, source: `${logo_pro}`},
  {'id': 14, source: `${marca_governo}`},
  {'id': 15, source: `${marca_indaia}`},
  {'id': 16, source: `${Marca}`},
  {'id': 17, source: `${Petininho}`},
  {'id': 18, source: `${Polaris_corpId_logos_flat_696x150}`},
  {'id': 19, source: `${prefeitura}`},
  {'id': 20, source: `${sagavw}`},
  {'id': 21, source: `${Sem_t_tulo}`},
  {'id': 22, source: `${shineray}`},
  {'id': 23, source: `${aawe}`},
  {'id': 24, source: `${bb}`},
];

const container = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
})

const wrap = css({
  maxWidth: 1200,
  padding: '60px 0px',
})

const client = css({
  // width: '100%',
  maxWidth: 'calc(1200px / 6)',
  height: 'auto',
  padding: '10px 40px',
})

class Clients extends Component {
  render() {
    // const { campaign } = this.props
    return (
      <div className={container} {...css({background: 'white'})}>
        <div className={wrap}>
          { shuffle(Imgns).map((imgn, key) => {
              return (
                <img className={client} key={imgn.id} src={imgn.source} alt={imgn.source} />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Clients;
