import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicle = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const description = "Morbi mollis rhoncus nisi, et accumsan metus. Etiam pretium nunc at lorem congue lobortis. Vestibulum ultricies facilisis eros, ut aliquet augue consectetur ac. Phasellus pharetra, nisl in posuere dictum, purus nunc molestie metus, quis condimentum dui velit vitae nibh. Integer ut suscipit turpis. Maecenas elit dui, aliquet ut lacus quis, dictum suscipit felis. Nulla facilisi. Nulla vel libero in eros porta porttitor. Vestibulum eu ultrices est."

	useEffect(() => {
		actions.loadDetails(params.vehicleid)
	}, [])




	return (
		<div className="jumbotron container "> {store.vehicle ? <div className="characterFather mt-5">
			<div className="row ">
				<div className="col-12 text-center ">
					<img className="vehicleBox  me-5 " style={{ marginTop: '2.4rem'}} src={store.loadvehicles[params.vehicleid]} />
				</div>

			</div>
			

			<div className="row vehicleBody">
				<div className="col-12">
					<h1 className="text-center mt-2 vehicleTitle" >{store.vehicle.model}</h1>
					<h5>{description}</h5>
				</div>
				<h2 className="vehicleDetails">DETAILS </h2>
				<div className="hrVehicle"> </div>
				
				<div className="row firstRow text-center">
					<div className="col-3">
						<h4>Class: {store.vehicle.vehicle_class}</h4>
					</div>
					<div className="col-3">
						 <h4 className="text-white">Manufacturer: {store.vehicle.manufacturer}</h4>
					</div>
					<div className="col-3">
						<h4>Cost: {store.vehicle.cost_in_credits} credits</h4>
					</div>
					<div className="col-3">
						<h4>Length: {store.vehicle.length}m</h4>
					</div>
				</div>
				<div className="row text-center">
					<div className="col-3">
						<h4 className="text-white">Crew: {store.vehicle.crew}</h4>
					</div>
					<div className="col-3">
						<h4>Passengers: {store.vehicle.passengers}</h4>
					</div>
					<div className="col-3">
						<h4>Max atmosphering speed: {store.vehicle.max_atmosphering_speed}%</h4>
					</div>
					<div className="col-3">
						<h4>Cargo capacity: {store.vehicle.argo_capacity}</h4>

					</div>
				</div>

			</div>
			
			

				
			
		
			
				
				
				</div> : <h1>.....</h1>}

		</div>
	);
};

SingleVehicle.propTypes = {
	match: PropTypes.object
};
