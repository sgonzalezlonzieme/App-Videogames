import { useDispatch, useSelector } from "react-redux";
import { PostNewVideogame, getGenres } from "../../actions";
import { useState, useEffect } from "react";

export function CreateVideogameForm(){
    const dispatch = useDispatch()
    const [newVideogame, setNewVideogame] = useState({})
    const genres = useSelector(state => state.genres)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(PostNewVideogame(newVideogame))
        alert('Videogame added')
    }

    const handleChange = (e) => {
        setNewVideogame({
            ...newVideogame, 
            [e.target.name] : e.target.value
        })
    }

    const handleGenres = (e) => {
        setNewVideogame({
            ...newVideogame, 
            //Array.from(e.target.selectedOptions, option => option.value)
            [e.target.name] : Array.from(e.target.selectedOptions).map(p => p.value)
        })//encontrar otra forma
    }

    useEffect(() => {
      if(genres.length < 1){
        dispatch(getGenres()) 
      }   
    }, []) // eslint-disable-line react-hooks/exhaustive-deps 

    //realizar el validate 
    return(
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
               <div>
                   <label>Name : </label>
                   <input name='name' type='text' placeholder='Insert name...' value={newVideogame.name} onChange={handleChange} />
               </div>
               <div>
                   <label>Description : </label>
                   <input name='description' type='text' placeholder='Insert description...' value={newVideogame.description} onChange={handleChange}/>
               </div>
               <div>
                   <label>Released : </label>
                   <input name='released' type='text' placeholder='Insert date...' value={newVideogame.released} onChange={handleChange}/>
               </div>
               <div>
                   <label>Rating : </label>
                   <input name='rating' type='number' min='0' max='5' placeholder='Insert number...' value={newVideogame.rating} onChange={handleChange}/>
               </div>
               {/* Mapear las platforms */}
               <div>
                   <label>Platforms : </label>
                   <input name='platforms' type='text' placeholder='Insert platforms...' value={newVideogame.platforms} onChange={handleChange}/>
               </div>
               <div>
                   <label>Image : </label>
                   <input name='image' type='text' placeholder='Insert url...' value={newVideogame.image} onChange={handleChange}/>
               </div> 
               <div>
                  <label>Genres : </label>
                  <select name='genres' multiple='multiple' onChange={handleGenres}>
                    {genres.map(genre => (
                        <option value={genre.id}>{genre.name}</option>
                    ))}
                 </select>
               </div>
               <div>
                    <input type='submit' value='Send'/>
               </div>
            </form>
        </div>
    )
}