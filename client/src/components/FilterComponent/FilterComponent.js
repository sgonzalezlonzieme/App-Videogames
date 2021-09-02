import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { orderByGenres, getGenres, orderById } from "../../actions";

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
  
    return(
        <div>
            <select onChange={handleChangeGenres}>
               <option value='All'>All</option>
               {genres.map(p => (
                 <option value={p.name}>{p.name}</option>
               ))}
            </select>
            <select onChange={handleChangeId}>
                <option value='All'>All</option>
                <option value='Database'>My Videogames</option>
                <option value='Api'>Page Videogames</option>
            </select>
            <select>
                {/* Buscar otra palabra que no sea default */}
                <option>Default</option> 
                <option>A-Z</option>
                <option>Z-A</option>
                <option>Highest rating</option>
                <option>Lower rating</option>
            </select>
        </div>
    )
}
