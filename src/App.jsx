import './App.css';
import Card from './components/card'
import { useState } from 'react';

const App = () => {
	return (
		<div className="App">
			<div className="header">
				<h1 className='title'>Star Wars Quiz ✨🛰️☄️</h1>
				<h2>How big of a Star Wars fan are you? Put your geeky knowledge to the test!</h2>
				<br></br>
				<h3>Press each card to find out the answer. Press the arrow to move forward.</h3>
				<h3>The categories are as follows:</h3>
			</div>

			<div className="container">
				<div className="categories">
					<div className="category characters">
						<h4>characters</h4>
					</div>

					<div className="category planets">
						<h4>planets</h4>
					</div>

					<div className="category quotes">
						<h4>quotes</h4>
					</div>

				</div>

				<div className="card"><Card /></div>
				
			</div>

		</div>
	)
}

export default App