import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

// Dentro de tu componente...




export const Characters = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {store.characters.map((character, index, param) => (
        <div key={index} className="col-sm-12 col-md-6 col-lg-4 text-center d-flex  ">

          <div className="card charactersCard text-start" style={{ width: "20rem" , height: '35rem'}}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body bg-characters ">
              <h5 className="card-title">{character.name}</h5>
              <div className="d-flex justify-content-between">
                <a href={`/single/${index + 1}`} className="btn btn-primary">
                  Learn More!
                </a>
                <button className="btn favorite" onClick={() => { actions.setFavorites(character.name)}}>★</button>
              </div>
              
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
