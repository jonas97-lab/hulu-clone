import React, { forwardRef } from 'react';
import './VideoCard.css';
import TruncateMarkup from 'react-truncate-markup';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

const VideoCard = forwardRef(({ movie }, ref) => {
	return (
		<div ref={ref} className='videoCard'>
			<img
				src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`}
				alt={movie.title}
			/>
			<TruncateMarkup lines={2}>
				<p>{movie.overview}</p>
			</TruncateMarkup>

			<h2>{movie.title || movie.original_name}</h2>
			<p className='videoCard__stats'>
				<div>{movie.release_date || movie.first_aire_date}</div>
				<div>{movie.vote_count} likes</div>
			</p>
		</div>
	);
});

export default VideoCard;
