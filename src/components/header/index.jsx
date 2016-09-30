import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toogleMenu } from '../../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import './Header.css';


class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { scroll: '' };
  }

  // componentDidMount(){
  //     window.addEventListener('scroll', this.handleScroll);
  //       this.setState({ scroll: 'scrolled' });
  // }
  // componentWillUnmount() {
  //     window.removeEventListener('scroll', this.handleScroll);
  // }
  //
  // handleScroll(event) {
  //     this.setState({ scroll: 'scrolled' });
  // }

  render() {
    const { toogleMenu } = this.props
    return (
      <header>
          <div className={"header-inner " + this.state.scroll }>
              <div className="Logo">
                  <div className="Logo-container">
                      <div className="Logo-container--visible">
                          <Link to="/">
                              <p>stq </p>
                              <ul>
                                  <li style={{lineHeight: '27px'}}>_branding</li>
                                  <li style={{lineHeight: '29px'}}>_advertising</li>
                                  <li>_digital</li>
                              </ul>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
          <div className="mn" style={{paddingTop: '15px'}}>
              <div
                onClick={() => toogleMenu(1)}
                className="menu-button"
                style={{top:'16.5px'}}>
                  <span className="before"></span>
                  <span className="main"></span>
                  <span className="after"></span>
              </div>
          </div>
      </header>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toogleMenu }, dispatch);
}

export default connect(null, mapDispatchToProps)(Header);
