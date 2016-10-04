import React, { Component } from 'react';

import Logo from './Logo';
import Navigation from './Navigation';
import './Header.css';

class Header extends Component {
    constructor(props) {
      super(props)

      this.state = {
        isScrolled: true,
        isOpenned: false
      }
    }

    handleScroll = () => {
      if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight) && !this.state.isScrolled) {
        this.setState({
          isScrolled: true,
        });
        // Load more content

        // Only call after loading finishes
        this.setState({
          isScrolled: false,
        });

      }
    }

  handleClick() {
    this.setState({isOpenned: !this.state.isOpenned});
  }

  componentDidMount = () => window.addEventListener('scroll', this.handleScroll)

  componentWillUnmount = () => window.removeEventListener('scroll', this.handleScroll)

  render() {
    const contentClass = this.state.isOpenned ? 'menu-button active' : 'menu-button';

    return (
      <header>
          <Logo isScrolled={this.state.isScrolled}/>

          <div className="mn">
              <div
                onClick={() => this.handleClick()}
                className={contentClass}
              >
                  <span className="before"></span>
                  <span className="main"></span>
                  <span className="after"></span>
              </div>
              <Navigation isOpenned={this.state.isOpenned}/>
          </div>
          <div className="navigation-overlay"></div>
      </header>
    );
  }
}

export default Header;
