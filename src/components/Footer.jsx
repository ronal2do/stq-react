import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="center fundo-azul grade">
        <div className="container">
          <div className="col-sm-6 col-xs-12">
              <div className="Footer-social">
                  <ul>
                      <li><a href="https://www.facebook.com/STQPublicidade/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                      <li><a href=""><i className="fa fa-spotify"></i></a></li>
                      <li><a href="https://www.youtube.com/channel/UCdlzSm5MAtogIg7E2oBoDKw" target="_blank"><i className="fa fa-youtube"></i></a></li>
                  </ul>
              </div>
          </div>
          <div className="col-sm-6 col-xs-12">
              <div className="Footer-copyright">
                  <p>© stq 1996 - 2017, Todos os direitos reservados.</p>
              </div>
          </div>
        </div>
      </footer>
    );
  }
}
