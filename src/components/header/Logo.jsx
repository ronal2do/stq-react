import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Logo extends Component {
  render() {
    const contentClass = this.props.isScrolled ? 'header-inner scrolled' : 'header-inner';
    const logoClass = this.props.isScrolled ? 'Logo scrolled' : 'Logo scrolled';

    return (
      <div className={contentClass}>
        <div className={logoClass}>
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
    );
  }
}
