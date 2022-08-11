import React, { useContext } from 'react';
import './Navigation.css';
import { AccountContext } from '../AccountBox/AccountContext';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	const { switchToSignup, switchToSignin } = useContext(AccountContext);
	return isSignedIn ? (
		<nav>
			{/* <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
		       <nav style={{ textAlign: 'right' }}>  */}
			<p className="p-nav" onClick={switchToSignin}>
				Sign out
			</p>
		</nav>
	) : (
		<>
			<nav>
				<p className="p-nav" onClick={switchToSignin}>
					Sign In
				</p>
				<p className="p-nav" onClick={switchToSignup}>
					Sign Up
				</p>
			</nav>
		</>
	);
};

export default Navigation;
