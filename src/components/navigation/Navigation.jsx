import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange }) => {
	return (
		<nav>
			{/*<nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
		       <nav style={{ textAlign: 'right' }}> */}
			<p className="p-nav" onClick={() => onRouteChange('signin')}>
				Sign out
			</p>
		</nav>
	);
};

export default Navigation;
