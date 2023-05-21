import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Characters = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {store.characters.map((character, index) => (
        <div key={index} className="col-sm-12 col-md-6 col-lg-4 text-center d-flex  ">

          <div className="card text-start" style={{ width: "20rem" , height: '35rem'}}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body bg-characters ">
              <h5 className="card-title">{character.name}</h5>
              <a href={`/single/${index + 1}`} className="btn btn-primary">
                Learn More!
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
