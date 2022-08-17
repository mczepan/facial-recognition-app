import React from 'react';
import './Rank.css';

const Rank = ({ user: { name, entries } }) => {
	return (
		<div>
			<div className="rank">{`${name}, your current rank is...`}</div>
			<div className="rank bold">{` #${entries}`}</div>
		</div>
	);
};

export default Rank;
