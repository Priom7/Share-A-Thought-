import React from 'react';
import moment from 'moment';
import './PostSummary.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TimerIcon from '@material-ui/icons/Timer';
import TocIcon from '@material-ui/icons/Toc';
import '../layout/Navbar.css';

const mystyle = {
	backgroundColor: '#2F2F31',
	padding: '10px',
	fontFamily: 'Arial'
};

const PostSummary = ({ post }) => {
	// console.log(post.title)
	console.log(post.createdAt);
	return (
		<div style={mystyle} className='card z-depth-0-post-summary post_summary'>
			<div className='card-content grey-text text-darken-3 '>
				<span className='btn btn-floating blue lighten-1 center text_title'>
					{post.authorFirstName[0]}
					{post.authorLastName[0]}
				</span>
				<hr />
				<span className='card-title center text_title '>
					<TocIcon className='navbar__icon' /> {post.title}
				</span>
				<br />
				<p className='text_title '> {post.content}</p>
				<br />
				<p className='text_title '>
					<AccountCircleIcon className='navbar__icon' /> Posted By {post.authorFirstName}{' '}
					{post.authorLastName}
				</p>
				<br />
				<p className='gray-text text_title '>
					<TimerIcon className='navbar__icon' />
					{moment(post.createdAt.toDate()).calendar()}
				</p>
			</div>
		</div>
	);
};

export default PostSummary;
