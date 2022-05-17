import React from 'react';
import './Rank.css';

const Rank = () => {
	return (
		<div>
			<div className="rank">{`Maciek, your current rank is...`}</div>
			<div className="rank bold">{` #5`}</div>
		</div>
	);
};

export default Rank;
