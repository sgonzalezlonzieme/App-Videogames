import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogamesByQuery } from "../../actions";


export function HomeSearch(){
     const dispatch = useDispatch()
     const [name, setName] = useState("")

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