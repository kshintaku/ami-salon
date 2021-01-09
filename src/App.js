import './App.css';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Policy from './components/pages/Policy';
import Logo from './Logo';
// import axios from 'axios';

class App extends Component {
	state = {
		instagram: [],
		loading: false,
		temp: '',
	};

	// async componentDidMount() {
	//   const instaHandle = 'hairbyami2021';
	//   const res = await axios.get(`https://www.instagram.com/${instaHandle}/?__a=1`, {headers: {
	//     'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4'
	//   }});
	//   this.setState({temp: res.data});
	// }

	render() {
		return (
			<Router>
				<Navbar />
				<div className='container'>
					<Switch>
						<Route
							exact
							path='/'
							render={(props) => (
								<Fragment>
									<div className='container-hero'>
										<div className='container-hero-title'>
											<h1>Hair by Ami<Logo /></h1>
										</div>
									</div>
									<div className='container-article'>
										<div className='container-article-info'>
											<h2>Moving to new location!</h2>
											<h3>Soon to be located at:</h3>
											<h4>
												1860 W Carson St. Suite 103
												<br />
												Torrance, CA 90501
											</h4>
											<div className='container-book-link'>
												<a
													href={
														'https://app.acuityscheduling.com/schedule.php?owner=21473339'
													}
													className='book-appointment'
												>
													Book Appointment
												</a>
											</div>
										</div>
										<div className='container-article-map'>
											<iframe
												src={
													'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.276544335217!2d-118.31396807469383!3d33.830978200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc0764653839%3A0x2f0523ec12fac826!2sYuko%20Salon!5e0!3m2!1sen!2sus!4v1608007107503!5m2!1sen!2sus'
												}
												frameBorder='0'
												style={{
													border: 0,
													allowfullscreen: '',
													ariHidden: false,
													tabindex: '0',
												}}
												title='googleMap'
											></iframe>
										</div>
									</div>
								</Fragment>
							)}
						/>
            <Route exact path='/policy' render={(props) => (<Policy />)}/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
