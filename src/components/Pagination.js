import React from 'react';

const Pagination = ({ totalCards, paginate, cardsPerPage, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='page-nav'>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            {/* {number === currentPage ? 'page-item2' : ' page-item'} */}
            <a
              onClick={() => {
                paginate(number);
              }}
              href='#!'
              className='page-link'
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
