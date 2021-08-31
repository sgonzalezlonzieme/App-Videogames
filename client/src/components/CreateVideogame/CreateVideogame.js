import { useDispatch } from "react-redux";
import { PostNewVideogame } from "../../actions";
import { useState } from "react";

export function CreateVideogame(){
    const dispatch = useDispatch()
    const [newVideogame, setNewVideogame] = useState({})

    const HandleSubmit = (e) => {
        e.preventDefault()
        dispatch(PostNewVideogame(newVideogame))
    }

    const HandleChange = (e) => {
        setNewVideogame({
            ...newVideogame, 
            [e.target.name] : e.target.value
        })
    }
    //realizar el validate 
    return(
        <div>
            <form onSubmit={HandleSubmit}>
               <div>
                   <label>Name : </label>
                   <input name='name' type='text' placeholder='Insert name...' value={newVideogame.name} onChange={HandleChange} />
               </div>
               <div>
                    <button type='Submit' value='Send'>Send</button>
               </div>
            </form>
        </div>
    )
}