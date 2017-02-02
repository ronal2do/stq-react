import React, {PropTypes} from 'react';

export default class Audio extends React.Component {
  render() {
    const { title, text, file } = this.props;
    return (
      <div className="container">
      <div className="row">
        <div className="col-sm-4 wow fadeInUp animated" style={{visibility:'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
          <div className="segundo-titulo">
              <p className="azul maior">_</p>
              <p className="azul"></p>
              <h4 className="azul">{title}<br /></h4>
              <p><span className="azul maior">{text}
                  <br />_<br />_</span></p>
          </div>
        </div>
        <div className="col-sm-8 wow fadeInUp animated" style={{visibility:'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
          <div className="padding-cem"></div>
          <div className="padding"></div>
          <audio controls="controls" style={{width: '100%'}} className="grade">
            <source src={`/audio/` + file + `.ogg`} type="audio/ogg" />
            <source src={`/audio/` + file + `.mp3`} type="audio/mpeg" />
                Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
  }
}

Audio.propTypes = {
  title: PropTypes.string.isRequired,
};
