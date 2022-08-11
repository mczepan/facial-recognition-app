import React from 'react';
import AccountBox from '../AccountBox/AccountBox';
import './SignIn.css';

const SignIn = ({ onRouteChange, route, isExpanded }) => {
	return (
		<div className="app-container">
			<AccountBox
				onRouteChange={onRouteChange}
				route={route}
				isExpanded={isExpanded}
			>
				{' '}
			</AccountBox>
		</div>
	);
};

export default SignIn;
