//Button: onClick={()=>{dispatch(changeColor())}}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenned: false
    };
  }
  componentDidMount() {
    console.log(this.state);
  }

  handleClick() {
    this.setState({isOpenned: !this.state.isOpenned});
  }

  render() {
    const contentClass = this.state.isOpenned ? 'push-nav fundo-azul grade push-open' : 'push-nav fundo-azul grade push-right';

    return (
      <nav className={contentClass}>
        <div className="Menu-wrap row">

          <div className="col-sm-6 ">
              <div className="h1 titulo text-align-left">
                <h2 className="stq" style={{fontSize:'78px'}}>stq</h2> <br />
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
            <br />
            <br />
            <br />
            <ul className="navigation skillsDouble">
                  <li><a className="scroll-to" href="/">_home</a></li>
                  <li><a className="scroll-to" href="/#somossbc">_trabalhos</a></li>
                  <li><a className="scroll-to" href="#contato">_contato</a></li>
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

const mapStateToProps = (state) => ({
    toogleMenu: state.isOpenned
});

export default connect(mapStateToProps)(Navigation);
