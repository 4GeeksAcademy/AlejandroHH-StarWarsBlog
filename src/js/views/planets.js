import React, { useContext } from 'react'
import { Context } from '../store/appContext'

export const Planets = () => {
    const {store, actions} = useContext(Context)
  return (
    <>
    
        {store.planets.map((planet, index) => {
            return (
                <div key={index} className="col-sm-12 col-md-6 col-lg-4 text-center d-flex  ">

                    <div className="card text-start" style={{ width: "20rem" , height: '35rem'}}>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${index +1}.jpg`} className="card-img-top" alt="..." />
                    <div className="card-body bg-planets">
                        <h5 className="card-title">{planet.name}</h5>

                        <div className="d-flex justify-content-between">
                             <a href={`/singlePlanet/${index +1}`} className="btn btnPlanets btn-primary">
                            Learn More!
                            </a>
                            <button className="btn favoritePlanet" onClick={() => {actions.setFavorites(planet.name)}}>★</button>
                        </div>

                    </div>
                    </div>
                </div>
            )
            
        })}

    </>
  )
}
