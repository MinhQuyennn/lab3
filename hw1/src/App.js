import { useState } from "react";
import Drum from "./drumsound";
import './App.css';
 

function App() {
	const sounds =[
		{
			name: "a",
			sound: require("./sound/sound1.mp3"),
			key: "A",
      		img: require('./img/icons8-drum-96.png')
		},
		{
			name: "s",
			sound: require("./sound/sound2.mp3"),
			key: "S",
      img: require('./img/icons8-drum-96.png')

		},
		{
			name: "w",
			sound: require("./sound/sound3.mp3"),
			key: "W",
      img: require('./img/icons8-drum-96.png')

		},
		{
			name: "d",
			sound: require("./sound/sound4.mp3"),
			key: "D",
      img: require('./img/icons8-drum-96.png')

		},
		{
			name: "j",
			sound: require("./sound/sound5.mp3"),
			key: "J",
      img: require('./img/icons8-drum-96.png')

		},
		{
			name: "k",
			sound: require("./sound/sound6.mp3"),
			key: "K",
      img: require('./img/icons8-drum-96.png')

		},
		{
			name: "l",
			sound: require("./sound/sound7.mp3"),
			key: "L",
      img: require('./img/icons8-drum-96.png')

		},
	];

	return (
		<div className="App">
			<h1 id='title'>Drum🥁Kit</h1>
			<div className="drums">
				{sounds.map((sound, i) => (
					<Drum key={i} letter={sound.key} sound={sound.sound} img={sound.img} className='abc' />
				))}
			</div>
		</div>
	);
}

export default App;