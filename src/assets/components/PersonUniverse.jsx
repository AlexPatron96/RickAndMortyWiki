import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from './Loader'

const PersonUniverse = ({ habitant }) => {

    const [apiPerson, setApiPerson] = useState({})
    useEffect(() => {
        axios.get(habitant)
            .then(res => setApiPerson(res.data))
    }, [])

    //console.log(apiPerson);

    return (
        <div>

            <li className='person'>
                {apiPerson.name}
                <img className='imgPerson' src={apiPerson.image} alt="" />
            </li>
        </div>
    );
};

export default PersonUniverse;