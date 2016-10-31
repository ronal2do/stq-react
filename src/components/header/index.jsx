import React, { Component } from 'react';

import Logo from './Logo';
import Navigation from './Navigation';
import './Header.css';

class Header extends Component {
    constructor(props) {
      super(props)

      this.state = {
        isScrolled: false,
        isOpenned: false
      }
    }

    componentDidMount = () => {
     global.addEventListener('scroll', this.handleScroll);
   };

   componentWillUnmount = () => {
     global.removeEventListener('scroll', this.handleScroll);
   };

   handleScroll = () => {
     const {isScrolled} = this.state;

     if (global.scrollY > 500 && !isScrolled) {
       console.log('> 500');
       this.setState({
         isScrolled: true,
       });
     }
     else if (global.scrollY <= 500 && isScrolled) {
       console.log('<= 500');
       this.setState({
         isScrolled: false,
       });
     }
   };

  handleClick() {
    this.setState({isOpenned: !this.state.isOpenned});
  }

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
              <Navigation isOpenned={this.state.isOpenned} />
          </div>
          <div className="navigation-overlay"></div>
      </header>
    );
  }
}

export default Header;
