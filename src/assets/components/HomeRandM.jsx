import { useEffect, useState } from 'react'
import axios from 'axios';
import imgPortada from '../img/portada-1.2.png';
import PersonUniverse from './PersonUniverse'
import Search from './Search'
import Pagination from './Pagination';



const HomeRandM = ({ apiRickyMorty, setApiRickyMorty }) => {

    const [apiResidents, setApiResidents] = useState(apiRickyMorty.residents)
    const [items, setItems] = useState([...apiRickyMorty.residents].splice(0, 10))
    const [currentPage, setCurrentPage] = useState(1)
    const [maxPage, setMaxPage] = useState(Math.ceil(apiResidents.length / 10))
    console.log(maxPage);
    const pages = []
    for (let i = 1; i <= maxPage; i++) {
        pages.push(i);
    }

    const previousPage = () => {
        const prev = currentPage - 1
        if (prev < 1) {
            alert('primera pagina')
            return
        }
        const firstIndex = (prev - 1) * 10
        setItems([...apiRickyMorty.residents].splice(firstIndex, 10))
        setCurrentPage(prev)
    }
    const nextPag = () => {
        const next = currentPage + 1
        const firstIndex = next * 10
        if (firstIndex > maxPage * 10) {
            alert('Ultima pagina')
            return
        }
        setItems([...apiRickyMorty.residents].splice(firstIndex - 10, 10))
        setCurrentPage(next)
    }

    const handlePageClick = (e) => {
        onPageChange(Number(e.target.id))
        console.log(Number(e.target.id));
        
    }
    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        const firstIndex = pageNumber * 10
        setItems([...apiRickyMorty.residents].splice(firstIndex -10 , 10))
        
    }

    const pageNumbers = pages.map(page => {
        if (maxPage > 1) {
            return (
                <li key={page} id={page} onClick={handlePageClick}
                    className={currentPage === page ? 'active' : null}>
                    {page}
                </li>
            );
        } else {
            return null;
        }
    }
    );



    

    console.log(currentPage);
    return (
        <div>

            <img src={imgPortada} alt="" />
            <Search />
            <div className='rick'>
                <h1 className='title'>{apiRickyMorty.name}</h1>
                <h2 className='dimen'> Dimension: {apiRickyMorty.dimension}</h2>
                <h2 className='type'> Type: {apiRickyMorty.type}</h2>
                <h2 className='resident'> Population: {apiRickyMorty.residents?.length}</h2>
            </div>
            <ul className='ulPerson'>
                {items.map(habitant => (
                    <PersonUniverse key={habitant} habitant={habitant} ></PersonUniverse>
                ))}
            </ul>
            {pageNumbers}
            <Pagination maxPage={maxPage} handlePageClick={handlePageClick} currentPage={currentPage} nextPag={nextPag} previousPage={previousPage} />

        </div>
    );
};

export default HomeRandM;