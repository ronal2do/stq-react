import React, {PropTypes} from 'react';

export default class Image extends React.Component {
  render() {
    const { title, file } = this.props;
    return (
      <div className="container">
          <div className="row">
            <div
              className="col-xs-12 wow fadeInUp padding animated" data-wow-delay="0.5s"
              style={{visibility:'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
              <br/><img src={file} style={{verticalAlign: 'middle', maxWidth: '100%', height: 'auto'}} alt={title} />
            </div>
          </div>
      </div>
    );
  }
}

Image.propTypes = {
  title: PropTypes.string,
  file: PropTypes.string.isRequired,
};
