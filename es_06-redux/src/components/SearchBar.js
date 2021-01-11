import React, { useState } from 'react';

// Usando gli Hooks
const SearchBar = ({onSerachTerm}) =>
{
    const [term, setTerm] = useState('west');

    const SearchChange = (evt) =>
    {
        setTerm(evt.target.value);
    }

    const SearchClick = (evt) =>
    {
        evt.preventDefault();
        onSerachTerm(term)
    }

    return (
        <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" 
            onChange={SearchChange}
            type="search" 
            value={term} 
            placeholder="Search" 
            aria-label="Search">
        </input>
        <button className="btn btn-outline-success my-2 my-sm-0" 
            onClick={SearchClick}
            type="submit">Cerca
        </button>
      </form>
    )
}

//Usando la classe 
/*class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: 'west'
        }
    }

    SearchChange = (evt) => {
        this.setState({term: evt.target.value})
    }

    render()
    {
        return (
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" 
                    onChange={this.SearchChange}
                    type="search" 
                    value={this.state.term} 
                    placeholder="Search" 
                    aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        )
    }
}
*/

export default SearchBar;