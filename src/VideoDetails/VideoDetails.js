import React, { Component } from "react";
import styles from "./VideoDetails.module.css";
import Axios from "axios";

export default class VideoDetails extends Component {
  state = {
    videoDetails: {
      id: "1",
      title: "Croissants | Flour and Stone",
      description:
        "There is no other way but to commit wholeheartedly to a relationship with a croissant. We have all found ourselves at the mercy of its allure. Here, in another epic film by the uber talented Nathan Rodger, our Erin divulges her personal romance with The Croissant.",
      views: 22500,
      vimeoId: 190062231,
      isLiked: "true",
      isSaved: "false",
    },
  };

  componentDidUpdate = () => {
    Axios.get(
      `https://5d76bf96515d1a0014085cf9.mockapi.io/video/${this.props.match.params.id}`
    )
      .then((response) => {
        console.log(response.data);
        this.setState({
          videoDetails: { ...response.data },
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const {
      title,
      vimeoId,
      isLiked,
      isSaved,
      description,
      views,
    } = this.state.videoDetails;

    return (
      <div className={styles.wrapper}>
        <iframe
          className={styles.videoFrame}
          title={title}
          src={`https://player.vimeo.com/video/${vimeoId}`}
        />
        <div className={styles.shortInfo}>
          <p className={styles.views}>{`${views} views`}</p>
          <div className={styles.iconWrapper}>
            <span className={styles.icons}>
              {isLiked ? (
                <i
                  style={{ color: "#FAD744" }}
                  className="fa fa-heart"
                  aria-hidden="true"
                ></i>
              ) : (
                <i className="fa fa-heart-o" aria-hidden="true"></i>
              )}
            </span>
            <span className={styles.icons}>
              <i className="fa fa-comment-o" aria-hidden="true"></i>
            </span>
            <span className={styles.icons}>
              {isSaved ? (
                <i
                  style={{ color: "#FAD744" }}
                  className="fa fa-bookmark"
                  aria-hidden="true"
                ></i>
              ) : (
                <i className="fa fa-bookmark-o" aria-hidden="true"></i>
              )}
            </span>
          </div>
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.details}>{description}</p>
      </div>
    );
  }
}
