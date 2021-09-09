import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getVideogamesByQuery, restartHome} from "../../actions";
import styles from './HomeInputSearch.module.css'


export function HomeInputSearch(){
     const dispatch = useDispatch()
     
     const videogamesByName = useSelector(state => state.videogamesByName)

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


    return(<div className={styles.container}>
        <form onSubmit={handleSubmit}>
            <input name='videogame' type='text' placeholder='Insert videogame...' value={name} onChange={handleChange}/>
            <button type='Submit'>{videogamesByName.length && !name ? "Show All" : "Search"}</button>
        </form>
    </div>)
}