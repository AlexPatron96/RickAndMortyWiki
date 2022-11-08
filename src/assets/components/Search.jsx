import { useEffect, useState } from 'react'
import axios from 'axios'


const Search = () => {
    const [apiSearch, setApiSearch] = useState({})
    const [idType, setIdType] = useState('')

    const searchType = () => {
        axios.get(`https://rickandmortyapi.com/api/location/?name=${idType}`)
            .then(res => setApiSearch(res.data))
    }  
    
    console.log(apiSearch);

    return (
        <div>
            <input type="text" value={idType} onChange={e => setIdType(e.target.value)} placeholder="Search for Universes......" />
            <button onClick={searchType}> Search</button>
            <div>
                {apiSearch.results?.map(show => (
                    <h1 key={show.id}>{show.name}</h1>
                ))}
            </div>
        </div>
    );
};

export default Search;