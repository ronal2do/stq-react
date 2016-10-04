//Button: onClick={()=>{dispatch(changeColor())}}
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
              <p>contato@stqpublicidade.com <br />+55 11 2337-2341</p>
              <p>rua gomes de carvalho, 921 <br />5º andar <br />são paulo, sp</p>
          </div>

          <div className="col-sm-6">
            <br/>
            <ul className="navigation skillsDouble">
                  <li><Link className="scroll-to" to="/" >_home</Link></li>
                  <li><Link className="scroll-to" to="/#trabalhos" >_trabalhos</Link></li>
                  <li><Link className="scroll-to" to="/#contato" >_contato</Link></li>
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
