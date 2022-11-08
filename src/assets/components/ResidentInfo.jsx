import React from 'react';

const ResidentInfo = () => {
    const [apiPerson, setApiPerson] = useState({})

    useEffect(() => {
        axios.get(habitant)
            .then(res => setApiPerson(res.data))

    }, [])

    console.log(apiPerson);

    return (
        
            <li className='person'>
                {apiPerson.name}
                <img className='imgPerson' src={apiPerson.image} alt="" />
            </li>
        
    );
};

export default ResidentInfo;