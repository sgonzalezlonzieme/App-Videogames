import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { VideogamesCardsHome } from "../VideogamesCardsHome/VideogamesCardsHome";
import { Pagination } from "../Pagination/Pagination";
import styles from './VideogamesHome.module.css'
import {filterByAndOrderBy} from "../../Functions/filteredAndOrder"



export function VideogamesHome(){
    const {videogames, genre, id, orderType} = useSelector(state => state)

     useEffect(() => {
        setCurrentPage(1);
        filterByAndOrderBy(videogames, genre, id, orderType)
    }, [videogames, genre, id, orderType])
    
    console.log(videogames, "Después de la función")
    
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9; 
    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filterByAndOrderBy(videogames, genre, id, orderType).slice(indexOfFirstPost, indexOfLastPost)

    function paginate(pageNumber){
        setCurrentPage(pageNumber)
      }

    return(
        <div>
        <div > 
            {
            !currentPosts ? <h1>No videogames found</h1> :
            currentPosts.length < 1 ? <h1>Loading...</h1> : currentPosts.map(games => (
                <div className={styles.container_videogame}>
                   <VideogamesCardsHome id={games.id} name={games.name} genres={games.genres?.join(', ')} image={games.image}/>
                </div>
            ))}
        </div>
        <div>
            {videogames.length < 9 ? <div></div> : <Pagination postsPerPage={postsPerPage} totalPosts={videogames.length} paginate={paginate}/>}
        </div>
        </div>)
}

