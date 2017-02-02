import React, {PropTypes} from 'react';
import YoutubePlayer from 'react-youtube-player';

export default class VideoComponent extends React.Component {
  render() {
    const { file } = this.props;
    return (
      <div className="container">
        <div id="thevideo" style={{display:'block'}} className="embed-responsive embed-responsive-16by9">
          <YoutubePlayer
              videoId={file}
              playbackState='unstarted'
              configuration={{
                showinfo: 0,
                controls: 0
              }}
          />
        </div>
      </div>
    );
  }
}

VideoComponent.propTypes = {
  file: PropTypes.string
};
