import React from "react";
import { Link } from "react-router-dom";
import classes from "./VideoCard.module.css";

const VideoCard = (props) => {
	const { id, thumbnail, title } = props.data
	return (
		<Link className={`${classes.VideoCard} ${props.activeId === id ? classes.active : ""}`} to={`/videoWatch/${id}`} >
			<div>
				<img className={classes.Thumbnail} src={thumbnail} alt="Video Thumbnail" />
				<h3 className={classes.Title}>{title}</h3>
			</div>
		</Link>
	);
};

export default VideoCard;
