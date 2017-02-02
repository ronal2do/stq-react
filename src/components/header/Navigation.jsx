import React, { Component } from 'react';
import { Link } from 'react-router';

import './Navigation.css';

class Navigation extends Component {
  render() {
    const contentClass = this.props.isOpenned ? 'push-nav fundo-azul grade push-open' : 'push-nav fundo-azul grade push-right';

    return (
      <nav className={contentClass}>
        <div className="Menu-wrap row">

          <div className="col-sm-6 ">
              <div className="h1 titulo text-align-left">
                <h2 className="stq">stq</h2> <br />
                <ul className="Bad">
                  <li><strong>_Branding</strong></li>
                  <li><strong>_Advertising</strong></li>
                  <li><strong>_Digital</strong></li>
                </ul>
              </div>
              <p>
                Nosso ponto de partida foi em 1996.
                Marcamos presença em Brasília, Alagoas, Pernambuco, Rio Grande do Sul, Maranhão, Santa Catarina e São Paulo.
                Conquistamos clientes, prêmios e, sobretudo, parceiros. Chamaram-nos de integrada, global, full, 360.
                Evoluímos, crescemos e nos reinventamos. Hoje somos B de branding: construímos e consolidamos marcas.
                Somos A de advertising: despertamos sentidos e miramos em resultados.
                E somos D de digital: modernizamos conceitos e compartilhamos conteúdos relevantes.
                Com estratégia e criatividade, somos BAD e fazemos gestão de comunicação. Da sua comunicação.
                Venha ser BAD com a stq.
              </p>
          </div>

          <div className="col-sm-6">
            <br/>
            <ul className="navigation skillsDouble">
                  <li><Link className="scroll-to" to="/" >_home</Link></li>
                  <li><Link className="scroll-to" to="/" >_trabalhos</Link></li>
                  <li><Link className="scroll-to" to="/" >_contato</Link></li>
                  <li>
                  <br />
                      <a className="icone-social" href="https://www.facebook.com/STQPublicidade/" target="_blank"><i className="fa fa-facebook fa-fw"></i></a>
                      <a className="icone-social" href="https://www.youtube.com/channel/UCdlzSm5MAtogIg7E2oBoDKw" target="_blank"><i className="fa fa-youtube fa-fw"></i></a>
                  </li>
              </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
