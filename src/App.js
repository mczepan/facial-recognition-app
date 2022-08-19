import React, { useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import { AccountContext } from './components/AccountBox/AccountContext';

function App() {
	const [input, setInput] = useState('');
	const [imgUrl, setImageUrl] = useState('');
	const [box, setBox] = useState([]);
	const [route, setRoute] = useState('signin');
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [user, setUser] = useState(null);

	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		if (isExpanded) {
			setTimeout(() => {
				setIsExpanded(false);
			}, [1000]);
		}
	}, [isExpanded]);

	const loadUser = (user) => {
		setUser(user);
	};

	const onInputChange = (event) => {
		const { value } = event.target;
		setInput(value);
	};

	const onPictureSubmit = () => {
		setImageUrl(input);
		fetch(`http://localhost:3001/imageUrl`, {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				input: input,
			}),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res) {
					fetch(`http://localhost:3001/image/${user.id}`, {
						method: 'put',
						headers: { 'Content-Type': 'application/json' },
					})
						.then((res) => res.json())
						.then((user) => {
							if (user) {
								loadUser(user);
							}
						})
						.catch((err) => console.log(err));
				}

				displayFaceBox(calculateFaceLocation(res));
			})
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
			setImageUrl('');
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

	const contextValue = { switchToSignup, switchToSignin, loadUser };
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
						<Rank user={user} />
						<ImageLinkForm
							onInputChange={onInputChange}
							onPictureSubmit={onPictureSubmit}
						/>
						<FaceRecognition imgUrl={imgUrl} box={box} />
					</>
				)}
			</AccountContext.Provider>
		</div>
	);
}

export default App;
