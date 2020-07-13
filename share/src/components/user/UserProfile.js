import React, { Component } from 'react';
import PostSummary from '../post/PostSummary';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import './userProfile.css';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Button, Col } from 'reactstrap';
import moment from 'moment';

class UserProfile extends Component {
	render() {
		//  console.log(this.props);
		const { posts, auth, users, profile } = this.props;
		console.log(auth);
		console.log(users);
		console.log(posts);
		console.log(profile);
		console.log(auth.createdAt);

		if (!auth.uid) {
			return <Redirect to='/signin' />;
		}

		return (
			<div>
				<Card style={{ width: '18rem' }} className='profile_card center'>
					<span className='btn btn-floating blue lighten-1 center text_title'>{profile.initial}</span>
					<CardBody>
						<CardTitle>Your Profile</CardTitle>
						<CardSubtitle>
							{profile.firstName} {profile.lastName}
						</CardSubtitle>
						<CardText>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</CardText>
						<Button>Edit</Button>
					</CardBody>
				</Card>

				{posts &&
					posts.map((post) => {
						if (auth.uid === post.authoId)
							return (
								<div className='dashboard container' key={post.id}>
									<Link to={'/post/' + post.id} key={post.id}>
										<PostSummary post={post} />
									</Link>
								</div>
							);
					})}
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	console.log('%c UserProle State :', 'background: #222; color: #bada55', state);

	return {
		posts: state.firestore.ordered.posts,
		auth: state.firebase.auth,
		users: state.firestore.ordered.users,
		profile: state.firebase.profile
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([ { collection: 'posts', orderBy: [ 'createdAt', 'desc' ] }, { collection: 'usres' } ])
)(UserProfile);
