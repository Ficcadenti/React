import React from 'react';
import FilmItem from './Fimltem';

function filmList({films})
{
    return (
            <div className="row">
            {
                films.map(film => <FilmItem  key={film.imdbID} film={film}></FilmItem>)
            }
            </div>
        )
}

export default filmList;