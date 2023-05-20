import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.loadDetails(params.theid)
	}, [])

	return (
		<div className="jumbotron container "> {store.character ? <div className="characterFather">
			<div className="row ">
				<div className="col-12 ">
					<img className="" style={{ margin: 'auto'}} src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} />
				</div>
				<div className="characterBody">
					<h1 className="text-white">{store.character.name}</h1>
				</div>
			</div>
		
			
				
				
				</div> : "Cargando..."}

		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
