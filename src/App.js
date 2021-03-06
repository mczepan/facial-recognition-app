import React, { useState } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import FaceRecognition from './components/faceRecognition/FaceRecognition';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
	apiKey: 'b8711d1c85db4bc482015e113b32a0b8',
});

function App() {
	const [input, setInput] = useState('');
	const [imgUrl, setImageUrl] = useState('');
	const [box, setBox] = useState([]);

	const onInputChange = (event) => {
		const { value } = event.target;
		setInput(value);
	};

	const onButtonSubmit = () => {
		setImageUrl(input);
		app.models
			.predict(Clarifai.FACE_DETECT_MODEL, input)
			.then((res) => displayFaceBox(calculateFaceLocation(res)))
			.catch((err) => console.log(err));
	};

	const calculateFaceLocation = (params) => {
		// params.outputs[0].data.regions.map(
		// 	(region) => region.region_info.bounding_box
		// );
		const clarifaiFace = params.outputs[0].data.regions.map(
			(region) => region.region_info.bounding_box
		);
		const image = document.getElementById('inputimage');
		const width = Number(image.width);
		const height = Number(image.height);
		return clarifaiFace.map((face) => ({
			leftColumn: face.left_col * width,
			topRow: face.top_row * height,
			rightColumn: width - face.right_col * width,
			bottomRow: height - face.bottom_row * height,
		}));
	};

	const displayFaceBox = (box) => {
		setBox(box);
	};

	return (
		<div className="App">
			<Navigation />
			<Logo />
			<Rank />
			<ImageLinkForm
				onInputChange={onInputChange}
				onButtonSubmit={onButtonSubmit}
			/>
			<FaceRecognition imgUrl={imgUrl} box={box} />
		</div>
	);
}

export default App;
