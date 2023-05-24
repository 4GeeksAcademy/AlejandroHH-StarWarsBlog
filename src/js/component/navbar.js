import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);



  

  return (
    <nav className="navbar navbar-light bg-light mb-3 p-3 ">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png" />
        </span>
      </Link>

      <div>
        <div className="dropdown favorites">
          <button className="btn btn-primary dropdown-toggle" style={{width: '10rem', height:'3rem', fontSize: '1.1rem'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
          </button>
          <ul className="dropdown-menu">
            {store.favorite.map((favorite, index) => (
              <li key={index}>
                <a className="dropdown-item" href="#" >
                  {favorite == undefined ? "" : favorite}
                  {favorite !== undefined ? <button onClick={() => actions.handleRemove(index)} className="btn" style={{fontSize: '15px', marginLeft: '20px'}}>🗑️</button> : ""}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
