import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imgUrl, box }) => {
	return (
		<div className="center">
			<div style={{ marginTop: '1rem', position: 'absolute' }}>
				{imgUrl && (
					<>
						<img
							id="inputimage"
							src={imgUrl}
							alt="uploaded img"
							width="500px"
							height="auto"
						/>
						{box?.map((b, id) => (
							<div
								key={id}
								className="boudning-box"
								style={{
									top: b.topRow,
									right: b.rightColumn,
									bottom: b.bottomRow,
									left: b.leftColumn,
								}}
							></div>
						))}
					</>
				)}
			</div>
		</div>
	);
};

export default FaceRecognition;
