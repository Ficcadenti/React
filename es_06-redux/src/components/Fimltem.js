import React from 'react';

function filmItem({film}) {
    return (
       
        <div className="card col-md-3">
             <img className="card-img-top" src={film.Poster} alt={film.Title} />
             <div className="card-body">
                <h5 className="card-title">{film.Title}</h5>
                <p className="card-text">Year: {film.Year}</p>
                <button  className="btn btn-primary">VIEW DETAIL</button>
            </div>
        </div>
        
           
    )  
}

export default filmItem;