import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Loader from './assets/components/Loader'
import HomeRandM from './assets/components/HomeRandM'



function App() {

    const [apiRickyMorty, setApiRickyMorty] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const ramdonId = Math.floor(Math.random() * 126) + 1
        //axios.get(`https://rickandmortyapi.com/api/location/6`)
        axios.get(`https://rickandmortyapi.com/api/location/${ramdonId}`)
            .then(res => setApiRickyMorty(res.data))
        setTimeout(() => {
            setLoading(false)
        }, [1000])
    }, [])


    // console.log(idType);
    //console.log(apiRickyMorty);

    return (
        <div className="App">
            {loading ? <Loader />
                : <HomeRandM apiRickyMorty={apiRickyMorty} setApiRickyMorty={setApiRickyMorty} />
            }
        </div>
    )
}

export default App