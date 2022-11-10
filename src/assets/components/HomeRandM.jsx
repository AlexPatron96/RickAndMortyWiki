import { useEffect, useState, Suspense, lazy } from 'react'
import axios from 'axios';
import imgPortada from '../img/portada-1.2.png';
import PersonUniverse from './PersonUniverse'
import Search from './Search'
import Pagination from './Pagination';
import Loader from './Loader';
//import ResidentInfo from './ResidentInfo';

const ResidentInfo = lazy(() => import('./ResidentInfo'))

const HomeRandM = ({ apiRickyMorty, setApiRickyMorty }) => {

    const [newDataSearch, setNewDataSearch] = useState({})
    const [items, setItems] = useState([...apiRickyMorty.residents].splice(0, 10))
    const [currentPage, setCurrentPage] = useState(1)
    const [maxPage, setMaxPage] = useState(Math.ceil(apiRickyMorty.residents.length / 10))
    const [idType, setIdType] = useState('')
    const pages = []
    for (let i = 1; i <= maxPage; i++) {
        pages.push(i);
    }


    const selectLocation = (show) => {

        console.log(show);
        setNewDataSearch(...[show])
        setItems([...show.residents].splice(0, 10))
        setApiRickyMorty(...[show])
        setMaxPage(Math.ceil(show.residents.length / 10))
        setCurrentPage(1)
        setIdType('')
    }

    /*===========================================*/
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
    /*===========================================*/
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
    /*===========================================*/
    const handlePageClick = (e) => {
        onPageChange(Number(e.target.id))
        //console.log(Number(e.target.id));

    }
    /*===========================================*/
    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        const firstIndex = pageNumber * 10
        setItems([...apiRickyMorty.residents].splice((firstIndex - 10), 10))

    }
    /*===========================================*/
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




    return (
        <div>

            <div className='contFrontpage'>
                <img className='imgFrontpage' src={imgPortada} alt="" />
                <Search setIdType={setIdType} idType={idType} selectLocation={selectLocation} />
            </div>

            <div className='contInfoPage'>
                <h2 className='title'>{apiRickyMorty.name}</h2>
                <div className='location'>
                    <h3 className='type'> Type: <br /> <span className='infLoc'> {apiRickyMorty.type}</span> </h3>
                    <h3 className='dimen'> Dimension: <br /> <span className='infLoc'> {apiRickyMorty.dimension}</span> </h3>
                    <h3 className='resident'> Population: <br /> <span className='infLoc'>{apiRickyMorty.residents?.length}</span> </h3>
                </div>
                <ul className='ulPerson'>
                    {items.map(habitant => (
                        <Suspense key={Math.random()*100}   fallback={<i class='bx bx-loader-alt bx-spin' ></i>}>
                            <ResidentInfo key={habitant} habitant={habitant} ></ResidentInfo>
                        </Suspense>
                    ))}
                </ul>
            </div>

            {/* <div className='circuloRT'></div> */}
            <Pagination pageNumbers={pageNumbers} maxPage={maxPage} handlePageClick={handlePageClick} currentPage={currentPage} nextPag={nextPag} previousPage={previousPage} />
                        

        </div>
    );
};

export default HomeRandM;