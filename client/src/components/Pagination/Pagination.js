import React from 'react';
import styles from './Pagination.module.css'
import icon from '../../img/pac-man.png'

export function Pagination({postsPerPage, totalPosts, paginate}){
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage);i++){
        pageNumbers.push(i);
    }

    return (<div className={styles.container}>
        {/* <img className={styles.pacman} src={icon} width="100px" alt='In-Games'/> */}
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