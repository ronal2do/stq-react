import React, {PropTypes} from 'react';

export default class ImageTripla extends React.Component {
  render() {
    const { title, text, file, type } = this.props;
    return (
      <div className="row" style={{padding:'0',margin:'0'}}>
          <div className="col-sm-4 wow fadeInUp text-center animated" data-wow-delay="0.5s" style={{padding: '0px', margin: '0px', visibility: 'visible', animationDelay: '0.5s', animationName:'fadeInUp'}}>
             <img src={title} alt={type} style={{maxWidth:'100%'}}/>
          </div>
          <div className="col-sm-4 wow fadeInUp text-center animated" data-wow-delay="0.6s" style={{padding: '0px', margin: '0px', visibility: 'visible', animationDelay: '0.6s', animationName:'fadeInUp'}}>
             <img src={text} alt={type} style={{maxWidth:'100%'}}/>
          </div>
          <div className="col-sm-4 wow fadeInUp text-center animated" data-wow-delay="0.7s" style={{padding: '0px', margin: '0px', visibility: 'visible', animationDelay: '0.7s', animationName:'fadeInUp'}}>
             <img src={file} alt={type} style={{maxWidth:'100%'}}/>
          </div>
      </div>
    );
  }
}

ImageTripla.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  file: PropTypes.string,
};
