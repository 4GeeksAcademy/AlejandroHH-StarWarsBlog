import React, { useContext } from 'react'
import { Context } from '../store/appContext'

export const Vehicles = () => {
    const {store, actions} = useContext(Context)
  return (
    <>
    
        {store.vehicles.map((vehicle, index) => {
            return (
                <div key={index} className="col-sm-12 col-md-6 col-lg-4 text-center d-flex  ">

                    <div className="card vehiclesCard text-start" style={{ width: "20rem" , height: '35rem'}}>
                    <img src={store.loadvehicles[index]} className="card-img-top" alt="..." />
                    <div className="card-body bg-vehicles">
                        <h5 className="card-title">{vehicle.name}</h5>

                        <div className="d-flex justify-content-between">
                             <a  href={`/singleVehicle/${vehicle.uid}`} className="btn btnVehicles btn-primary">
                            Learn More!
                            </a>
                            <button className="btn favoriteVehicle" onClick={() => {actions.setFavorites(vehicle.name)}}>★</button>
                        </div>

                    </div>
                    </div>
                </div>
            )
            
        })}

    </>
  )
}
