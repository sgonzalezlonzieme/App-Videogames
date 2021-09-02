import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { orderByGenres, getGenres, orderById, orderByRating } from "../../actions";

export function FilterComponent(){
    const genres = useSelector(state => state.genres)
    const dispatch = useDispatch()

    useEffect(() => {
      if(genres.length < 1){
        dispatch(getGenres())
      }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps 
  
    function handleChangeGenres(e){
        dispatch(orderByGenres(e.target.value))
    } 

    function handleChangeId(e){
        dispatch(orderById(e.target.value))
    }

    function handleChangeFilter(){ //cambiar nombre
        dispatch(orderByRating())
    }


   //Cambiar nombre del componente
    return(
        <div>
            <select onChange={handleChangeGenres}>
               <option value='All'>All Genres</option>
               {genres.map(p => (
                 <option value={p.name}>{p.name}</option>
               ))}
            </select>
            <select onChange={handleChangeId}>
                <option value='All'>All Videogames</option>
                <option value='Database'>My Videogames</option>
                <option value='Api'>Page Videogames</option>
            </select>
            <select onChange={handleChangeFilter}>
                <option value='All'>All Videogames</option> 
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
                <option value='HIGHEST_TO_LOWEST'>Highest rating</option>
                <option value='LOWEST_TO_HIGHEST'>Lowest rating</option>
            </select>
        </div>
    )
}
