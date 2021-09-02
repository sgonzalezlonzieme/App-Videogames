import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogamesByQuery, getVideogames } from "../../actions";


export function HomeSearch(){
     const dispatch = useDispatch()
     const [name, setName] = useState("")
     const videogames = useSelector(state => state.videogames)

    useEffect(() => {
       if(videogames.length < 1){
         dispatch(getVideogames())
       }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps 

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
       e.preventDefault();
       dispatch(getVideogamesByQuery(name))
       setName("")
    }

    return(<div>
        <form onSubmit={handleSubmit}>
            <input name='videogame' type='text' placeholder='Insert videogame...' value={name} onChange={handleChange}/>
            <button type='Submit' value='Search'>Search</button>
        </form>
    </div>)
}