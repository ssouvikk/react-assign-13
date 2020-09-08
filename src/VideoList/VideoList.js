import React, { Component } from "react";
import VideoCard from "../VideoCard/VideoCard";
import styles from "./VideoList.module.css";
import Axios from "axios";

export default class VideoList extends Component {
  state = {
    VideoList: [],
    activeId: this.props.match.params.id,
  };

  componentDidMount = () => {
    Axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/playlist")
      .then((response) => this.setState({ VideoList: response.data }))
      .catch((err) => console.log(err));
  };

  render() {
    console.log(this.props.match.params.id);
    return (
      <div className={styles.wrapper}>
        {this.state.VideoList.map((v) => (
          <VideoCard
            key={v.id}
            id={v.id}
            title={v.title}
            thumbnail={v.thumbnail}
          />
        ))}
      </div>
    );
  }
}
