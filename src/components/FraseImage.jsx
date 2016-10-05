import React, {PropTypes} from 'react';

export default class FraseImage extends React.Component {
  render() {
    const { title, text, file } = this.props;
    return (
      <div className="container">
              <div className="padding"></div>
                <div className="row">
                    <div className="col-sm-6 wow fadeInUp text-center animated" data-wow-delay="0.5s"
                        style={{visibility:'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
                        <div className="padding"></div>
                        <div className="padding"></div>
                        <img src={file} alt={title} style={{maxWidth:'100%'}}/>
                    </div>
                    <div className="col-sm-6 wow fadeInUp animated" data-wow-delay="0.5s"
                        style={{visibility:'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
                        <div className="segundo-titulo">
                            <div className="padding"></div>
                            <div className="padding"></div>
                            <p className="azul maior">_</p>
                            <p className="azul"></p>
                            <h4 className="azul">{title}<br/></h4>
                            <p><span className="azul maior">{text}<br/>_<br/>_</span></p>
                        </div>
                    </div>
                </div>
                <div className="padding-cem"></div>
                </div>
    );
  }
}

FraseImage.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  file: PropTypes.string,
};
