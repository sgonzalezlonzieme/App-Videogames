import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getVideogamesByQuery, restartHome} from "../../actions";


export function HomeInputSearch(){
     const dispatch = useDispatch()
     
     const videogamesFiltered = useSelector(state => state.videogamesFiltered)

     const [name, setName] = useState("")


    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
       e.preventDefault();
       if(name){
        dispatch(getVideogamesByQuery(name))
       }else{
        dispatch(restartHome()) // CAMBIAR EL NOMBRE A RESET
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