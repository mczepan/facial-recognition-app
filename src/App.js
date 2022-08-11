import React, { useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Clarifai from 'clarifai';
import SignIn from './components/SignIn/SignIn';
import { AccountContext } from './components/AccountBox/AccountContext';

const app = new Clarifai.App({
	apiKey: 'b8711d1c85db4bc482015e113b32a0b8',
});

function App() {
	const [input, setInput] = useState('');
	const [imgUrl, setImageUrl] = useState('');
	const [box, setBox] = useState([]);
	const [route, setRoute] = useState('signin');
	const [isSignedIn, setIsSignedIn] = useState(false);

	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		if (isExpanded) {
			setTimeout(() => {
				setIsExpanded(false);
			}, [1000]);
		}
	}, [isExpanded]);

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

	const onRouteChange = (route) => {
		setRoute(route);
		if (route === 'home') {
			setIsSignedIn(true);
		} else {
			setIsSignedIn(false);
		}
	};
	const switchToSignup = () => {
		setIsExpanded(true);
		setTimeout(() => {
			onRouteChange('signup');
		}, 500);
	};
	const switchToSignin = () => {
		setIsExpanded(true);
		setTimeout(() => {
			onRouteChange('signin');
		}, 500);
	};

	const contextValue = { switchToSignup, switchToSignin };
	return (
		<div className="App">
			<AccountContext.Provider value={contextValue}>
				<Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn} />
				{route === 'signin' || route === 'signup' ? (
					<SignIn
						onRouteChange={onRouteChange}
						route={route}
						isExpanded={isExpanded}
					/>
				) : (
					<>
						<Logo />
						<Rank />
						<ImageLinkForm
							onInputChange={onInputChange}
							onButtonSubmit={onButtonSubmit}
						/>
						<FaceRecognition imgUrl={imgUrl} box={box} />
					</>
				)}
			</AccountContext.Provider>
		</div>
	);
}

export default App;
