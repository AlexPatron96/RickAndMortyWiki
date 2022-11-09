import React from 'react';

const Pagination = ({pageNumbers,previousPage, nextPag, currentPage, maxPage, handlePageClick }) => {

    return (
        <div className='contPagination'>
            {/* <h1>{currentPage}</h1> */}
            <button onClick={previousPage}>{'<..'}</button>
            {pageNumbers} 
            <button onClick={nextPag}>{'..>'}</button>
        </div>
    );
};

export default Pagination;