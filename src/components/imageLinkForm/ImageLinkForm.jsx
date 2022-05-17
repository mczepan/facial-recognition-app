import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
	return (
		<div>
			<p className="p-img-link-form">{`This Magic Mario will detect faces in your pictures. Give it a try!`}</p>
			<div className="center">
				<div className="form">
					<input className="input-img-link-form" type="text" />
					<button className="button-img-link-form">Detect</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;
