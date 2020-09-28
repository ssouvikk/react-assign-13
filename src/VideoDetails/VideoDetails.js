import React, { Component } from "react";
import styles from "./VideoDetails.module.css";

export default class VideoDetails extends Component {
	render() {
		const { title, vimeoId, isLiked, isSaved, description, views } = this.props.videoData;

		return (
			<div className={styles.wrapper}>
				<iframe className={styles.videoFrame} title={title} src={`https://player.vimeo.com/video/${vimeoId}`} />
				<div className={styles.shortInfo}>
					<p className={styles.views}>{`${views} views`}</p>
					<div className={styles.iconWrapper}>
						<span className={styles.icons}>
							{isLiked ? <i style={{ color: "#FAD744" }} className="fa fa-heart" aria-hidden="true" ></i> : <i className="fa fa-heart-o" aria-hidden="true"></i>}
						</span>
						<span className={styles.icons}> <i className="fa fa-comment-o" aria-hidden="true"></i> </span>
						<span className={styles.icons}>
							{isSaved ? <i style={{ color: "#FAD744" }} className="fa fa-bookmark" aria-hidden="true" ></i> : <i className="fa fa-bookmark-o" aria-hidden="true"></i>}
						</span>
					</div>
				</div>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.details}>{description}</p>
			</div>
		);
	}
}
