import React from 'react';
import './AccountBox.css';

const AccountBox = () => {
	return (
		<div className="box-container">
			<div className="top-container">
				<div className="back-drop"></div>
				<div className="header-container">
					<h2 className="header-text">Welcome</h2>
					<h2 className="header-text">Back</h2>
					<h5 className="small-text">Please sign-in to continue</h5>
				</div>
			</div>
		</div>
	);
};

export default AccountBox;
