import React, { useState } from 'react';
import { useEffect } from 'react';
import './AccountBox.css';
import { AccountContext } from './AccountContext';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AccountBox = ({ onRouteChange, route, isExpanded }) => {
	return (
		<div className="box-container">
			<div className="top-container">
				<div
					className={isExpanded ? `back-drop back-drop-expanded` : 'back-drop'}
				></div>
				{route === 'signin' ? (
					<div className="header-container">
						<h2 className="header-text">Welcome</h2>
						<h2 className="header-text">Back</h2>
						<h5 className="small-text">Please sign-in to continue</h5>
					</div>
				) : (
					<div className="header-container">
						<h2 className="header-text">Create</h2>
						<h2 className="header-text">Account</h2>
						<h5 className="small-text">Please sign-up to continue</h5>
					</div>
				)}
			</div>
			<div className="inner-container">
				{route === 'signin' && <LoginForm onRouteChange={onRouteChange} />}
				{route === 'signup' && <SignupForm />}
			</div>
		</div>
	);
};

export default AccountBox;
