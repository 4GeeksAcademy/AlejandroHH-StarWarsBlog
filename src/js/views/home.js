import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "./characters";
import { Planets } from "./planets";
import { Context } from "../store/appContext";

export const Home = () => {
	const {state, actions} = useContext(Context)

	/*useEffect(() => {
		actions.loadCharacters();
		actions.loadPlanets();
	}, [])
	*/
	
	return (
		<div className="container  mt-5">
				<div className="row">
					<h1 className="focus-in-expand h1Animation">CHARACTERS</h1>
					
					<div className="col-12 d-flex overflow-auto" >
							<Characters />
					</div>
				</div>
			
				<div className="row mt-5">
					<h1 className="col-2 planets h1Animation">PLANETS</h1>
					<div className="col-12 d-flex overflow-auto" >
						<Planets />
					</div>
				</div>
		</div>
	)
	
};
