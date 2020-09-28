import Axios from 'axios'
import React, { Component } from 'react'
import VideoCard from '../VideoCard/VideoCard'
import VideoDetails from '../VideoDetails/VideoDetails'
import styles from './MainPage.module.css'

export default class MainPage extends Component {
    state = {
        playList: [],
        videoData: {}
    }

    fetchPlayList = () => {
        Axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist')
            .then(response => {
                this.setState({ playList: [...response.data] })
            })
            .catch(err => console.log(err))
    }

    fetchVideoDetails = () => {
        Axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/video/" + this.props.match.params.id)
            .then(response => {
                this.setState({ videoData: { ...response.data } })
                window.scrollTo({ top: 0, behavior: 'smooth' });
            })
            .catch(err => console.log(err))
    }

    renderVideos = () => {
        return this.state.playList.map(v => <VideoCard key={v.id} activeId={this.props.match.params.id} data={v} />)
    }

    componentDidUpdate = (prevProps, prevStates) => {
        let currentId = this.props.match.params.id
        let lastId = prevProps.match.params.id
        if (currentId !== lastId) {
            this.fetchVideoDetails()
        }
    }

    componentDidMount = () => {
        this.fetchVideoDetails()
        this.fetchPlayList()
    }

    render() {
        return (
            <div className={styles.container}>
                <VideoDetails videoData={this.state.videoData} />
                <div className={styles.playlistContainer}>
                    {this.renderVideos()}
                </div>
            </div>
        )
    }
}
