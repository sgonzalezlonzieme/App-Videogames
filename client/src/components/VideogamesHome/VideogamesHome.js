import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { VideogamesCardsHome } from "../VideogamesCardsHome/VideogamesCardsHome";
import { Pagination } from "../Pagination/Pagination";



export function VideogamesHome(){
    //hacer distractorin
    //CAMBIAR NOMBRE DE VIDEOGAMES FILTERED
    //ALL VIDEOGAMES --- SOLO MAYUSUCULA: COMPONENTE, PROTOTYPE, CLASS
    const videogamesFilter = useSelector(state => state.videogamesFilter) //distractorin
    const allVideogames = useSelector(state => state.videogames)

    // const filterByGenres = useSelector(state => state.filterByGenres)//filtered
    // const filterById = useSelector(state => state.filterById) //filtered
    // const orderBy = useSelector(state => state.orderBy)

    // const [posts, setPosts] = useState([]);
    const gamesToRender = videogamesFilter.length ? videogamesFilter : allVideogames
    // setPosts(gamesToRender)
    const [currentPage, setCurrentPage]= useState(1);
    const [postsPerPage]= useState(9); //variable no state

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = gamesToRender.slice(indexOfFirstPost, indexOfLastPost)

    useEffect(()=>{
      
    }, [])

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
            {console.log(videogamesFilter, "CONSOLE LOG....AAAAA")}
        
        <div> 
            {//resolver problema de carga
                // Error en consola por mismo id
            currentPosts.length < 1 ? <h1>Loading...</h1> : currentPosts.map(games => (
                <div>
                   <VideogamesCardsHome id={games.id} name={games.name} genres={games.genres?.join(', ')} image={games.image}/>
                </div>//Buscar algún ícono 
            ))}
        <div>
            {currentPosts.length <= 8 ? <div></div> : <Pagination postsPerPage={postsPerPage} totalPosts={gamesToRender.length} paginate={paginate}/>}
        </div>
        </div>
        </div>)
}

