import React, { useContext } from 'react';
import { AccountContext } from './AccountContext';
import './LoginForm.css';

const SignupForm = (props) => {
	const { switchToSignin } = useContext(AccountContext);
	return (
		<div className="box-login-container">
			<form action="" className="form-container">
				<input type="text" placeholder="Full Name" className="input" />
				<input type="email" placeholder="Email" className="input" />
				<input type="password" placeholder="Password" className="input" />
				<input
					type="password"
					placeholder="Confirm Password"
					className="input"
				/>
			</form>
			<br />

			<button className="submit-button">SignUp</button>
			<br />
			<span href="#" className="muted-link">
				Already have an account?{' '}
				<a href="#" className="bold-link" onClick={switchToSignin}>
					Signin
				</a>
			</span>
		</div>
	);
};

export default SignupForm;
