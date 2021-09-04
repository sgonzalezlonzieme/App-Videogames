import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getVideogamesByQuery, restartFiltered} from "../../actions";


export function HomeInputSearch(){
     const dispatch = useDispatch()
     
     const videogamesFiltered = useSelector(state => state.videogamesFilter)

     const [name, setName] = useState("")


    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
       e.preventDefault();
       if(name){
        dispatch(getVideogamesByQuery(name))
       }else{
        dispatch(restartFiltered()) // CAMBIAR EL NOMBRE A RESET
       }
       setName("")
    }


    return(<div>
        <form onSubmit={handleSubmit}>
            <input name='videogame' type='text' placeholder='Insert videogame...' value={name} onChange={handleChange}/>
            <button type='Submit'>{videogamesFiltered.length && !name ? "Show All" : "Search"}</button>
        </form>
    </div>)
}