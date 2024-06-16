import React, { Component } from 'react'
import Menu from './Menu.js'
import Video from './Video.js'

const VIDEOS = {
    fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
    slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
    cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
    eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { src: VIDEOS.fast };
    }
    render() {
        let chooseVideo = (newVideo) => {
            this.setState({ src: VIDEOS[newVideo] })
        }
        return (
            <div>
                <h1>Video Player</h1>
                <Menu chooseVideo={chooseVideo} />
                <Video src={this.state.src} />
            </div>
        )
    }
}

