import React, { useState } from 'react';
import { useEffect } from 'react';
import './AccountBox.css';
import { AccountContext } from './AccountContext';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AccountBox = ({ onRouteChange }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [active, setActive] = useState('signin');

	useEffect(() => {
		if (isExpanded) {
			setTimeout(() => {
				setIsExpanded(false);
			}, [1000]);
		}
	}, [isExpanded]);

	const switchToSignup = () => {
		setIsExpanded(true);
		setTimeout(() => {
			setActive('signup');
		}, 500);
	};
	const switchToSignin = () => {
		setIsExpanded(true);
		setTimeout(() => {
			setActive('signin');
		}, 500);
	};

	const contextValue = { switchToSignup, switchToSignin };
	return (
		<AccountContext.Provider value={contextValue}>
			<div className="box-container">
				<div className="top-container">
					<div
						className={
							isExpanded ? `back-drop back-drop-expanded` : 'back-drop'
						}
					></div>
					{active === 'signin' ? (
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
					{active === 'signin' && <LoginForm onRouteChange={onRouteChange} />}
					{active === 'signup' && <SignupForm />}
				</div>
			</div>
		</AccountContext.Provider>
	);
};

export default AccountBox;
