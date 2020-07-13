import React, { Component } from 'react';
import Notifications from './Notifications';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class AllNotifications extends Component {
	render() {
		//  console.log(this.props);
		const { auth, notifications } = this.props;

		if (!auth.uid) {
			return <Redirect to='/signin' />;
		}

		return (
			<div className='dashboard container'>
				<div className='row'>
					<div className='col s12 m6'>
						<Notifications notifications={notifications} />
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	// console.log(state)
	return {
		auth: state.firebase.auth,
		notifications: state.firestore.ordered.notifications
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([ { collection: 'notifications', orderBy: [ 'time', 'desc' ] } ])
)(AllNotifications);
