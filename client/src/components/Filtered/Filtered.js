import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { FilterByGenre, getGenres, FilterById, orderByRating } from "../../actions";

export function Filtered(){
    const genres = useSelector(state => state.genres)
    const dispatch = useDispatch()

    useEffect(() => {
      if(genres.length < 1){
        dispatch(getGenres())
      }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps 
  
    function handleChangeGenres(e){
        dispatch(FilterByGenre(e.target.value))
    } 

    function handleChangeId(e){
        dispatch(FilterById(e.target.value))
    }

    function handleChangeOrder(e){ //cambiar nombre
        dispatch(orderByRating(e.target.value))
    }


   //Cambiar nombre del componente
    return(//ver si a tiempo moduralizar más
        <div>
            <select onChange={handleChangeGenres}>
               <option value='All'>All Genres</option>
               {genres.map(p => (
                 <option value={p.name}>{p.name}</option>
               ))}
            </select>
            <select onChange={handleChangeId}>
                <option value='All'>All Videogames</option>
                <option value='DbVideogames'>My Videogames</option>
                <option value='ApiVideogames'>Page Videogames</option>
            </select>
            <select onChange={handleChangeOrder}>
                <option value='Default order'>Default order</option> 
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
                <option value='HIGHEST_TO_LOWEST'>Highest rating</option>
                <option value='LOWEST_TO_HIGHEST'>Lowest rating</option>
            </select>
        </div>
    )
}