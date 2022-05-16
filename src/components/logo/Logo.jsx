import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import mario from './mario.svg';

const Logo = () => {
	return (
		<div className="logo">
			<Tilt
				className="Tilt"
				options={{ max: 55, easing: 'cubic-bezier(.17,.67,.91,.47)' }}
				style={{ height: 150, width: 150 }}
			>
				<div className="Tilt-inner">
					<img
						src={mario}
						alt="logo"
						style={{ paddingTop: '5px', height: '100px' }}
					/>
				</div>
			</Tilt>
		</div>
	);
};

export default Logo;
