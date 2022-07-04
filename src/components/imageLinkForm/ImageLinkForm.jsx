import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className="p-img-link-form">{`This Magic Mario will detect faces in your pictures. Give it a try!`}</p>
			<div className="center">
				<div className="form1">
					<input
						className="input-img-link-form"
						type="text"
						onChange={onInputChange}
					/>
					<button className="button-img-link-form" onClick={onButtonSubmit}>
						Detect
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;
