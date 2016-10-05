import React, {PropTypes} from 'react';

export default class ImageDupla extends React.Component {
  render() {
    const { title, text, file } = this.props;
    return (
      <div className="container">
        <div className="row" style={{padding:'0',margin:'0'}}>
          <div className="col-sm-6 wow fadeInUp text-center animated" data-wow-delay="0.6s" style={{padding: '0px', margin: '0px', visibility: 'visible', animationDelay: '0.6s', animationName:'fadeInUp'}}>
             <img src={text} alt={title} style={{maxWidth:'100%'}}/>
          </div>
          <div className="col-sm-6 wow fadeInUp text-center animated" data-wow-delay="0.7s" style={{padding: '0px', margin: '0px', visibility: 'visible', animationDelay: '0.7s', animationName:'fadeInUp'}}>
             <img src={file} alt={title} style={{maxWidth:'100%'}}/>
          </div>
        </div>
      </div>
    );
  }
}

ImageDupla.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  file: PropTypes.string,
};
