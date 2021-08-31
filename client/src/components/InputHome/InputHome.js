import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogamesByQuery } from "../../actions";


export function InputHome(){
     const dispatch = useDispatch()
     const [name, setName] = useState("")

    const HandleChange = (e) => {
        setName(e.target.value)
    }

    const HandleSubmit = (e) => {
       e.preventDefault();
       dispatch(getVideogamesByQuery(name))
    }

    return(<div>
        <form onSubmit={HandleSubmit}>
            <input type='text' placeholder='Insert videogame...' value={name} onChange={HandleChange}/>
            <button type='Submit' value='Search'>Search</button>
        </form>
    </div>)
}