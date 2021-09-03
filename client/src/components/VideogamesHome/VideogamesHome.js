import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { VideogamesCardsHome } from "../VideogamesCardsHome/VideogamesCardsHome";
import { Pagination } from "../Pagination/Pagination";



export function VideogamesHome(){
    const videogamesFilter = useSelector(state => state.videogamesFilter) //distractorin
    const Allvideogames = useSelector(state => state.videogames)
    const filterByGenres = useSelector(state => state.filterByGenres)
    const filterById = useSelector(state => state.filterById)
    const orderBy = useSelector(state => state.orderBy)

    console.log(videogamesFilter)

    const [posts, setPosts]= useState(videogamesFilter);
    const [currentPage, setCurrentPage]= useState(1);
    const [postsPerPage]= useState(9); //variable no state

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    useEffect(() => {
       if(filterByGenres==='All' && filterById==='All' && orderBy==='All'){
           setPosts(Allvideogames)
       }else{
           setPosts(videogamesFilter)
       }
    }, [Allvideogames, videogamesFilter, filterByGenres, filterById, orderBy]) // eslint-disable-line react-hooks/exhaustive-deps 

    function paginate(pageNumber){
        setCurrentPage(pageNumber)
      }

    return(
        <div>
        <div> 
            {//resolver problema de carga
                // Error en consola por mismo id
            currentPosts.length < 1 ? <h1>Loading...</h1> : currentPosts.map(games => (
                <div>
                   <VideogamesCardsHome id={games.id} name={games.name} genres={games.genres?.join(', ')} image={games.image}/>
                </div>//Buscar algún ícono 
            ))}
        <div>
            {currentPosts.length <= 8 ? <div></div> : <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>}
        </div>
        </div>
        </div>)
}

