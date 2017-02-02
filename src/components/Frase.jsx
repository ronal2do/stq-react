import React, {PropTypes} from 'react';

export default class Frase extends React.Component {
  render() {
    const { title, text } = this.props;
    return (
      <div className="container">
        <div className="row">

          <div className="col-sm-4 wow fadeInUp animated" data-wow-delay="0.5s" style={{visibility:'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
            <div className="segundo-titulo">
              <p className="azul maior">_</p>
              <p className="azul"></p>
              <h4 className="azul">{title}<br/></h4>
              <p><span className="azul maior">_<br/>
              {text}
              <br/>_<br/>_</span></p>
            </div>
          </div>
           <div
             className="col-sm-8 wow fadeInUp animated"
             style={{visibility:'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
          </div>
        </div>
      </div>
    );
  }
}

Frase.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
