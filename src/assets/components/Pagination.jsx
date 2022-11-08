import React from 'react';

const Pagination = ({ previousPage, nextPag, currentPage, maxPage, handlePageClick }) => {

    return (
        <div>
            <h1>{currentPage}</h1>
            <button onClick={previousPage}>Previous</button>
            <button onClick={nextPag}>Next</button>
        </div>
    );
};

export default Pagination;