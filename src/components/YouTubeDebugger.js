// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  handleBitrateChange = () => {
    this.setState({
      settings: {
        ...this.state.settings, 
        bitrate: 12
      }
    })
  }

  handleResolutionChange = () => {
    this.setState({
      settings: {...this.state.settings,
        video: {...this.state.settings.video, resolution: '720p'}
      }
    })
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleBitrateChange} className="bitrate">Change bitrate</button>
        <button onClick={this.handleResolutionChange} className="resolution">Change resolution</button>
      </div>
    );
  }
}

export default YouTubeDebugger
