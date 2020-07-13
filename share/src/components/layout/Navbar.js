import React from 'react';
import { Link } from 'react-router-dom';
import SignedInlinks from './SignedInLinks';
import SignedOutlinks from './SignedOutLinks';
import { connect } from 'react-redux';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import './Navbar.css';

const Navbar = (props) => {
	const { auth, profile } = props;
	// console.log(auth);
	const links = auth.uid ? <SignedInlinks profile={profile} /> : <SignedOutlinks />;
	return (
		<nav className='navbar'>
			<div className='navbar__linksDiv'>
				<Link to='/' className='navbar__logo'>
					<AccountBoxIcon className='navbar__icon' />Share A Thought
				</Link>
				{links}
			</div>
		</nav>
	);
};

const mapStateToProps = (state) => {
	// console.log(state)

	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	};
};
export default connect(mapStateToProps)(Navbar);
