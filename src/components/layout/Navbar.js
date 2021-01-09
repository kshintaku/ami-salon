import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Logo';

class Navbar extends Component {
	constructor() {
		super();
		var prevScrollpos = window.pageYOffset;
		window.onscroll = function () {
			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				document.getElementById('navbar').style.backgroundColor =
					'transparent';
			} else {
				document.getElementById('navbar').style.backgroundColor =
					'rgba(190, 190, 190, 0.8)';
			}
			prevScrollpos = currentScrollPos;
		};
	}

	toggleNav = () => {
		if (document.getElementById('nav-icon').className === '') {
			document.getElementById('nav-icon').className = 'open';
			document.getElementById('side-nav').style.width = '72%';
		} else {
			document.getElementById('nav-icon').className = '';
			document.getElementById('side-nav').style.width = '0';
		}
	};

	render() {
		return (
			<nav id='navbar'>
				<div className='container-nav'>
					<div className='left-nav'>
						<div id='nav-icon' onClick={this.toggleNav}>
							<span></span>
							<span></span>
							<span></span>
						</div>
						<Link to='/' className='active'>
							Hair by Ami<Logo />
						</Link>
					</div>
					<div className='right-nav'>
						<ul>
							<li>
								<Link to='/services'>Services</Link>
							</li>
							<li>
								<Link to='/policy'>Policy</Link>
							</li>
							<li>
								<Link
									to='https://app.acuityscheduling.com/schedule.php?owner=21473339'
									className='nav-appointment'
								>
									Book Appointment
								</Link>
							</li>
						</ul>
					</div>
					<div className='side-nav' id='side-nav'>
						<ul>
							<li>
								<Link
									to='/'
									className='active'
									onClick={this.toggleNav}
								>
									Home
								</Link>
							</li>
							<li>
								<Link to='/services' onClick={this.toggleNav}>
									Services
								</Link>
							</li>
							<li>
								<Link to='/policy' onClick={this.toggleNav}>
									Policy
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
