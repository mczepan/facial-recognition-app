import React from 'react';
import AccountBox from '../AccountBox/AccountBox';
import './SignIn.css';

const SignIn = ({ onRouteChange }) => {
	return (
		<div className="app-container">
			<AccountBox onRouteChange={onRouteChange}> </AccountBox>
		</div>
	);
};

export default SignIn;
