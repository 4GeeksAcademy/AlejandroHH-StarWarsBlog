import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 p-3 " >
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png" /></span>
			</Link>

			<div>
			<div className="dropdown">
				<button className="btn btn-primary dropdown-toggle" style={{width: '10rem', height:'3rem', fontSize: '1.1rem'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu">
					<li><a className="dropdown-item" href="#">CHANGE</a></li>
					<li><a className="dropdown-item" href="#">CHANGE</a></li>
					<li><a className="dropdown-item" href="#">CHANGE</a></li>
				</ul>
				</div>
			</div>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
