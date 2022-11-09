import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({ habitant }) => {
    const [apiPerson, setApiPerson] = useState({})
    useEffect(() => {
        axios.get(habitant)
            .then(res => setApiPerson(res.data))
    }, [])

    console.log(apiPerson);

    return (
        <div className='contPersonInfo'>
            <img className='imgPerson' src={apiPerson.image} alt="" />
            <li >
                <h3> {apiPerson.name}</h3>
                <hr />
                <h4> Specie</h4>
                <h5>{apiPerson.species}</h5>
                <h4> Origin </h4>
                <h5> {apiPerson.origin?.name}</h5>
                <h4> Appearance in episodes</h4>
                <h5> {[apiPerson.espisode].length}</h5>
                
            </li>
        </div>
    );
};

export default ResidentInfo;