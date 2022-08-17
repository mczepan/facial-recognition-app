import React, { useContext } from 'react';
import { useState } from 'react';
import { AccountContext } from './AccountContext';
import './LoginForm.css';

const SignupForm = (props) => {
	const { switchToSignin } = useContext(AccountContext);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');

	const onNameChange = (e) => {
		setName(e.target.value);
	};

	const onEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const onPasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const onPasswordConfirmChange = (e) => {
		setPassword2(e.target.value);
	};

	const signupHandler = (e) => {
		fetch('http://localhost:3001/register', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		}).then((r) => {
			if (r.status == 200) {
				switchToSignin();
			}
		});
	};
	return (
		<div className="box-login-container">
			<form action="" className="form-container">
				<input
					type="text"
					onChange={onNameChange}
					placeholder="Full Name *"
					className="input"
					value={name}
				/>
				<input
					type="email"
					required
					value={email}
					placeholder="Email *"
					onChange={onEmailChange}
					className="input"
				/>
				<input
					type="password"
					value={password}
					onChange={onPasswordChange}
					placeholder="Password *"
					className="input"
				/>
				<input
					type="password"
					value={password2}
					onChange={onPasswordConfirmChange}
					placeholder="Confirm Password *"
					className="input"
				/>
			</form>
			<br />

			<button className="submit-button" onClick={signupHandler}>
				SignUp
			</button>
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
