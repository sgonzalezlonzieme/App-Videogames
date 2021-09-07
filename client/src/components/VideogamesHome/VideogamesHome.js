import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { VideogamesCardsHome } from "../VideogamesCardsHome/VideogamesCardsHome";
import { Pagination } from "../Pagination/Pagination";
import styles from './VideogamesHome.module.css'


export function VideogamesHome(){
    //hacer distractorin
    const videogamesFiltered = useSelector(state => state.videogamesFiltered) //distractorin
    const allVideogames = useSelector(state => state.videogames)

    // const filterByGenres = useSelector(state => state.filterByGenres)//filtered
    // const filterById = useSelector(state => state.filterById) //filtered
    // const orderBy = useSelector(state => state.orderBy)

    // setPosts(gamesToRender)
    const gamesToRender = videogamesFiltered.length ? videogamesFiltered : allVideogames
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9; 

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = gamesToRender.slice(indexOfFirstPost, indexOfLastPost)

    useEffect(() => {
     setCurrentPage(1)
    }, [gamesToRender])

    // useEffect(() => {
    //    if(filterByGenres==='All' && filterById==='All' && orderBy==='All'){
    //        setPosts(allVideogames)
    //    }else{
    //        setPosts(videogamesFilter)
    //    }
    // }, [allVideogames, videogamesFilter, filterByGenres, filterById, orderBy]) // eslint-disable-line react-hooks/exhaustive-deps 

    function paginate(pageNumber){
        setCurrentPage(pageNumber)
      }

    return(
        <div>
        <div > 
            {//resolver problema de carga
                //Error en consola por mismo id
                //Buscar algún ícono para loading
                //Encontrar alguna forma que cuando el array este vacio devuelva
                //no videogames found
            typeof videogamesFiltered[0] === 'string' ? <h1>No videogames found</h1> :
            currentPosts.length < 1 ? <h1>Loading...</h1> : currentPosts.map(games => (
                <div className={styles.container_videogame}>
                   <VideogamesCardsHome id={games.id} name={games.name} genres={games.genres?.join(', ')} image={games.image}/>
                </div>
            ))}
        </div>
        <div>
            {gamesToRender.length < 9 ? <div></div> : <Pagination postsPerPage={postsPerPage} totalPosts={gamesToRender.length} paginate={paginate}/>}
        </div>
        </div>)
}

