import React, { Component } from 'react';
import Notifications from './Notifications';
import UserList from '../user/UserList';
import PostList from '../post/PostList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import '../dashboard/Dashboard.css';

class Dashboard extends Component {
	render() {
		//  console.log(this.props);
		const { posts, auth, notifications, users } = this.props;
		// console.log(posts);
		// console.log(users);

		if (!auth.uid) {
			return <Redirect to='/signin' />;
		}

		return (
			<div className='dashboard container'>
				<div className='row'>
					{/* <div className="col s12 m6 l3 offset-m1 user_list">
            <UserList users={ users }></UserList>
          </div> */}

					<div className='col s12 m6'>
						<PostList posts={posts} />
					</div>

					<div className='col s12 m6 '>
						<Notifications notifications={notifications} />
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		posts: state.firestore.ordered.posts,
		auth: state.firebase.auth,
		notifications: state.firestore.ordered.notifications,
		users: state.firestore.ordered.users
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'posts', orderBy: [ 'createdAt', 'desc' ] },
		{ collection: 'notifications', limit: 5, orderBy: [ 'time', 'desc' ] },
		{ collection: 'users' }
	])
)(Dashboard);
