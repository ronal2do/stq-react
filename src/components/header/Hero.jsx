import React from 'react';
import VideoBg from './VideoBG';
import './Hero.css';

class Hero extends React.Component {

  render() {

  const divStyle = {
		height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
	}
	const zIndex = {
		zIndex: 3,
		opacity: 0.65
	}
	const transformTranslate3d = {
		transformTranslate3d: (0, 0, 0)
	}
    return (
		<section id="home" style={divStyle} className="hero video-background dark center nav-trigger" >
		    <div id="bgVideo" data-0="transform: translate3d(0px, 0px, 0px);" className="skrollable skrollable-between" style={transformTranslate3d}>
		    		<VideoBg />
		    </div>
		    <div className="container hero-content">
		        <div className="col-xs-12 col-sm-10 col-sm-offset-1 skrollable skrollable-between" data-0="opacity: 0.65;" data-top-bottom="opacity: 0;" style={zIndex}>
		            <h1 className="titulo">stq</h1>
		        </div>
		    </div>
		</section>
    );
  }
}

export default Hero;
