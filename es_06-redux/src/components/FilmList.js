import React from 'react';
import FilmItem from './Fimltem';

function filmList({films})
{
    if (films!=null)
        return (
            <div className="row">
            {  
                films.map(film => <FilmItem  key={film.imdbID} film={film}></FilmItem>)
            }
            </div>
        )
    else
    {
        return null;
    }
}

export default filmList;