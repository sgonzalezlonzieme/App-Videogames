import React from 'react';
import styles from './Pagination.module.css'

export function Pagination({postsPerPage, totalPosts, paginate}){
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage);i++){
        pageNumbers.push(i);
    }

    return (<div className={styles.container}>
        <nav>
        <ul className="Pagination">
            {pageNumbers.map(number => (
                   <button onClick={() => paginate(number)}>
                       {number}
                   </button>
            ))}
        </ul>
        </nav>
    </div>)
}