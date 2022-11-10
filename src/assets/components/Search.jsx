import { useEffect, useState } from 'react'
import axios from 'axios'


const Search = ({ setIdType , idType, selectLocation }) => {

    const [apiSearch, setApiSearch] = useState({})
    //const [idType, setIdType] = useState('')

    const searchType = () => {
        axios.get(`https://rickandmortyapi.com/api/location/?name=${idType}`)
            .then(res => setApiSearch(res.data.results))
            selectLocation(filterPerson[0])
    }

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/?name=${idType}`)
            .then(res => setApiSearch(res.data))
    }, [idType])


    const filterPerson = apiSearch.results?.filter((pers) => {
        
        if (pers.name.toUpperCase().includes(pers.name.toUpperCase())) {
            console.log(pers.name.toUpperCase())
            return true;
        }
        return false;
    })
    console.log(filterPerson);

    return (
        <div className='contSearchJsx'>
            <div className='contSearchValue' >
                <input type="text" value={idType} onChange={e => setIdType(e.target.value)} placeholder="Search for Universes......" />
                <button onClick={searchType}> Search</button>
            </div>
            <div className='contSearchResult'>
                {filterPerson?.map(show => (
                    <h5 className={idType ? null : "hiddenResult"} key={show.id} onClick={() => selectLocation(show)}>{show.name} - { show.id}</h5>
                ))}
            </div>
        </div>
    );
};

export default Search;