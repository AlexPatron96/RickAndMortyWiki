import { useEffect, useState } from 'react'
import axios from 'axios'


const Search = ({ selectLocation }) => {

    const [apiSearch, setApiSearch] = useState({})
    const [idType, setIdType] = useState('')
    const searchType = () => {
        axios.get(`https://rickandmortyapi.com/api/location/?name=${idType}`)
            .then(res => setApiSearch(res.data))
    }


    //console.log(apiSearch);

    return (
        <div className='contSearchJsx'>
            <div className='contSearchValue' >
                <input type="text" value={idType} onChange={e => setIdType(e.target.value)} placeholder="Search for Universes......" />
                <button onClick={searchType}> Search</button>
            </div>
            <div className='contSearchResult'>
                {apiSearch.results?.map(show => (
                    <h5 key={show.id} onClick={() => selectLocation(show)}>{show.name}</h5>
                ))}
            </div>
        </div>
    );
};

export default Search;