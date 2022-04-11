import React from 'react';

const Pagination = ({newsItemsPerPage, totalNewsItems, paginate}) => {
    const pageNumbers = [];

    for (let i =1; i <= Math.ceil(totalNewsItems / newsItemsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className='padding-center'>
                {pageNumbers.map(number => (
                    <li key={number} className='collection-item'>
                        <a onClick={() => paginate(number)} className='collection-link'>
                            {number}
                        </a>
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export default Pagination;