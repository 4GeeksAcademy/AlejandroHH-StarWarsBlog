import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const description = "Morbi mollis rhoncus nisi, et accumsan metus. Etiam pretium nunc at lorem congue lobortis. Vestibulum ultricies facilisis eros, ut aliquet augue consectetur ac. Phasellus pharetra, nisl in posuere dictum, purus nunc molestie metus, quis condimentum dui velit vitae nibh. Integer ut suscipit turpis. Maecenas elit dui, aliquet ut lacus quis, dictum suscipit felis. Nulla facilisi. Nulla vel libero in eros porta porttitor. Vestibulum eu ultrices est."

	useEffect(() => {
		actions.loadDetails(params.theid)
	}, [])

	return (
		<div className="jumbotron container "> {store.character ? <div className="characterFather mt-5">
			<div className="row ">
				<div className="col-12 text-center ">
					<img className="characterBox mb-3 me-5 " style={{ margin: 'auto'}} src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} />
				</div>

			</div>
			

			<div className="row characterBody">
				<div className="col-12">
					<h1 className="text-center mt-2" >{store.character.name}</h1>
					<h5>{description}</h5>
				</div>
				<h2 className="details">DETAILS </h2>
				<div className="hr"> </div>
				
				<div className="row firstRow text-center">
					<div className="col-3">
						<h4>From: {store.planet.name}</h4>
					</div>
					<div className="col-3">
						 <h4 className="text-white">Birth in: {store.character.birth_year}</h4>
					</div>
					<div className="col-3">
						<h4>Gender: {store.character.gender}</h4>
					</div>
					<div className="col-3">
						<h4>Hair color: {store.character.hair_color}</h4>
					</div>
				</div>
				<div className="row text-center">
					<div className="col-3">
						<h4 className="text-white">Height: {store.character.height}cm</h4>
					</div>
					<div className="col-3">
						<h4>Mass: {store.character.mass}kg</h4>
					</div>
					<div className="col-3">
						<h4>Skin: {store.character.skin_color}</h4>
					</div>
					<div className="col-3">
						<h4>Eye color: {store.character.eye_color}</h4>

					</div>
				</div>

			</div>
			
			

				
			
		
			
				
				
				</div> : "Cargando..."}

		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
