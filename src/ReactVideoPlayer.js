import React, { Component } from "react";
import ReactPlayer from "react-player";

class ReactVideoPlayer extends Component {
    constructor(props) {
      super(props);
      this.player = React.createRef();
    }

    render () {
      return (
        <div className='player-wrapper' style={{
          alignItems: 'left',
          alignContent: 'left'
        }}>
          <ReactPlayer
            ref={this.player}
            url='https://player.vimeo.com/video/813126516?h=0c1bb9be1e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
            className='react-player'
            playing
            controls
          />
          <button                       style={{
                        backgroundColor: 'white',
                        width: '250px'
                      }} onClick={() => this.player.current.seekTo(0)}>Factory Planning</button><br />
          <button                       style={{
                        backgroundColor: 'white',
                        position: 'absolute',
                        width: '250px'
                      }} onClick={() => this.player.current.seekTo(29.75)}>Social VR</button><br />
          <button                       style={{
                        backgroundColor: 'white',
                        position: 'absolute',
                        width: '250px'
                      }} onClick={() => this.player.current.seekTo(51.0)}>Immersive Surgery Planning</button><br />
          <button                       style={{
                        backgroundColor: 'white',
                        position: 'absolute',
                        width: '250px'
                      }} onClick={() => this.player.current.seekTo(63.5)}>Collaborative Surgery Planning</button><br />
          <button                       style={{
                        backgroundColor: 'white',
                        position: 'absolute',
                        width: '250px'
                      }} onClick={() => this.player.current.seekTo(73.5)}>AI Virtual Assistant</button><br />
          <button                       style={{
                        backgroundColor: 'white',
                        position: 'absolute',
                        width: '250px'
                      }} onClick={() => this.player.current.seekTo(81.5)}>Immersive Learning Campus</button><br />
          <button                       style={{
                        backgroundColor: 'white',
                        position: 'absolute',
                        width: '250px'
                      }} onClick={() => this.player.current.seekTo(111.75)}>Hands-Free Doc Reader</button><br />
          <button 
                                style={{
                                  backgroundColor: 'white',
                                  position: 'absolute',
                                  width: '250px'
                                }}
          onClick={() => this.player.current.seekTo(125)}>Urban Planner</button><br />
          <button 
                      style={{
                        backgroundColor: 'white',
                        position: 'absolute',
                        width: '250px'
                      }}
          onClick={() => this.player.current.seekTo(145)}>VR Data Exploration</button><br />
          <button 
            style={{
              backgroundColor: 'white',
              position: 'absolute',
              width: '250px'
            }}
            onClick={() => this.player.current.seekTo(163.5)}>Virtual Thermo Lab Simulation</button><br />
        </div>
      )
    }
  }

  export default ReactVideoPlayer;