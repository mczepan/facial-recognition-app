import React, { useContext, useState } from 'react';
import { AccountContext } from './AccountContext';
import './LoginForm.css';

const LoginForm = ({ onRouteChange }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { switchToSignup, loadUser } = useContext(AccountContext);

	const onEmailChange = (e) => setEmail(e.target.value);
	const onPasswordChange = (e) => setPassword(e.target.value);
	const onSubmitSignIn = (e) => {
		fetch('https://secure-coast-37694.herokuapp.com/signin', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email,
				password,
			}),
		}).then((res) => {
			if (res.status == 200) {
				res.json().then((data) => {
					loadUser(data);
					onRouteChange('home');
				});
			}
		});
	};
	return (
		<div className="box-login-container">
			<form action="" className="form-container">
				<input
					type="email"
					onChange={onEmailChange}
					placeholder="Email *"
					className="input"
				/>
				<input
					type="password"
					onChange={onPasswordChange}
					placeholder="Password *"
					className="input"
				/>
			</form>
			<br />
			<a href="#" className="muted-link">
				Forget your password?
			</a>
			<br />
			<button
				className="submit-button"
				onClick={() => {
					onSubmitSignIn();
				}}
			>
				SignIn
			</button>
			<br />
			<span href="#" className="muted-link" onClick={switchToSignup}>
				Don't have an account?{' '}
				<a className="bold-link" style={{ cursor: 'pointer' }}>
					Signup
				</a>
			</span>
		</div>
	);
};

export default LoginForm;
