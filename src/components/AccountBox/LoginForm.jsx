import React, { useContext } from 'react';
import { AccountContext } from './AccountContext';
import './LoginForm.css';

const LoginForm = ({ onRouteChange }) => {
	const { switchToSignup } = useContext(AccountContext);
	return (
		<div className="box-login-container">
			<form action="" className="form-container">
				<input type="email" placeholder="Email" className="input" />
				<input type="password" placeholder="Password" className="input" />
			</form>
			<br />
			<a href="#" className="muted-link">
				Forget your password?
			</a>
			<br />
			<button className="submit-button" onClick={() => onRouteChange('home')}>
				SignIn
			</button>
			<br />
			<a href="#" className="muted-link" onClick={switchToSignup}>
				Don't have an account? <a className="bold-link">Signup</a>
			</a>
		</div>
	);
};

export default LoginForm;
