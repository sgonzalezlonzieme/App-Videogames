import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { VideogamesCardsHome } from "../VideogamesCardsHome/VideogamesCardsHome";
import { Pagination } from "../Pagination/Pagination";
import styles from './VideogamesHome.module.css'
import {filterByAndOrderBy} from "../../Functions/filteredAndOrdered"

export function VideogamesHome(){
    const {videogames, videogamesByName, genre, id, orderType} = useSelector(state => state)

    const gamesToRender = videogamesByName.length ? videogamesByName : filterByAndOrderBy(videogames, genre, id, orderType)

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 15; 
    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = gamesToRender.slice(indexOfFirstPost, indexOfLastPost)
    
    function paginate(pageNumber){
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
       setCurrentPage(1);
    }, [videogamesByName, genre, id, orderType])
    
    return(
        <div>
        <div className={styles.container}> 
            {
             //Si todavía no llegó el pedido a la api
             videogames.length < 1 ? <h1 className={styles.loading}>Loading...</h1> :
             //Problema de servidor
             currentPosts[0] === 'Server error 500' ? <h1 className={styles.notFound}>Server error, please try later</h1> :  
             //Si no encontró ningún juego la search o el filter dejó vacio videogames
             currentPosts[0] === 'No videogames found' ? <h1 className={styles.notFound}>No videogames found</h1> :
             
             currentPosts.map(games => (
                <div className={styles.videogame}>
                   <VideogamesCardsHome id={games.id} name={games.name} genres={games.genres?.join(', ')} image={games.image}/>
                </div>
            ))}
        </div>
        <div>
            {console.log(currentPosts,"HTML")}
            {gamesToRender.length <= 15 ? <div></div> : <Pagination postsPerPage={postsPerPage} totalPosts={gamesToRender.length} paginate={paginate}/>}
        </div>
        </div>)
}

