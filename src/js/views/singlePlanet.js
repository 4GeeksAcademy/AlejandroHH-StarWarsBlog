import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const description = "Morbi mollis rhoncus nisi, et accumsan metus. Etiam pretium nunc at lorem congue lobortis. Vestibulum ultricies facilisis eros, ut aliquet augue consectetur ac. Phasellus pharetra, nisl in posuere dictum, purus nunc molestie metus, quis condimentum dui velit vitae nibh. Integer ut suscipit turpis. Maecenas elit dui, aliquet ut lacus quis, dictum suscipit felis. Nulla facilisi. Nulla vel libero in eros porta porttitor. Vestibulum eu ultrices est."

	useEffect(() => {
		actions.loadDetails(params.planetid)
	}, [])

	return (
		<div className="jumbotron container "> {store.planet ? <div className="characterFather mt-5">
			<div className="row ">
				<div className="col-12 text-center ">
					<img className="planetBox  me-5 " style={{ marginTop: '2.4rem'}} src={`https://starwars-visualguide.com/assets/img/planets/${params.planetid}.jpg`} />
				</div>

			</div>
			

			<div className="row planetBody">
				<div className="col-12">
					<h1 className="text-center mt-2 planetTitle" >{store.planet.name}</h1>
					<h5>{description}</h5>
				</div>
				<h2 className="planetDetails">DETAILS </h2>
				<div className="hrPlanet"> </div>
				
				<div className="row firstRow text-center">
					<div className="col-3">
						<h4>Population: {store.planet.population}</h4>
					</div>
					<div className="col-3">
						 <h4 className="text-white">Rotation period: {store.planet.rotation_period} days</h4>
					</div>
					<div className="col-3">
						<h4>Orbital period: {store.planet.orbital_period} days</h4>
					</div>
					<div className="col-3">
						<h4>Diameter: {store.planet.diameter}km</h4>
					</div>
				</div>
				<div className="row text-center">
					<div className="col-3">
						<h4 className="text-white">Gravity: {store.planet.gravity}</h4>
					</div>
					<div className="col-3">
						<h4>Terrain: {store.planet.terrain}</h4>
					</div>
					<div className="col-3">
						<h4>Surface water: {store.planet.surface_water}%</h4>
					</div>
					<div className="col-3">
						<h4>Climate: {store.planet.climate}</h4>

					</div>
				</div>

			</div>
			
			

				
			
		
			
				
				
				</div> : <h1>.....</h1>}

		</div>
	);
};

SinglePlanet.propTypes = {
	match: PropTypes.object
};
