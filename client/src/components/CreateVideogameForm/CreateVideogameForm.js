import { useDispatch, useSelector } from "react-redux";
import { PostNewVideogame, getGenres } from "../../actions";
import { useState, useEffect } from "react";



export function CreateVideogameForm(){
    const dispatch = useDispatch()

    const genres = useSelector(state => state.genres)

    const [createdVideogame, setCreatedVideogame] = useState({})
   
    
   
    useEffect(() => {
        if(genres.length < 1){
            dispatch(getGenres()) 
        }   
    }, []) // eslint-disable-line react-hooks/exhaustive-deps 

    ////////////////////////////////////////////////////////////////

    const [errors, setErrors] = useState({});
    
    function validate(createdVideogame) {
        if(!createdVideogame.name){
            errors.name = 'name is required'
        }else{
            errors.name = '';
        }
        if(!createdVideogame.image){
            errors.image = 'image is required'
        }else{
            errors.image = '';
        }
        if(!createdVideogame.genres){
            errors.genres = 'genres are required'
        }else{
            errors.genres = '';
        }
        return errors;
    }
    
    const handleSubmit = (e) => {
            e.preventDefault()
            if(createdVideogame.name && createdVideogame.image && createdVideogame.genres){
              dispatch(PostNewVideogame(createdVideogame))
            }
            console.log(createdVideogame)
        }
    
    const handleChange = (e) => {
        setCreatedVideogame({
            ...createdVideogame, 
            [e.target.name] : e.target.value
        })
        setErrors(validate({...createdVideogame, [e.target.name]: e.target.value}))
        console.log(errors)
    }

    const handleGenres = (e) => {
        setCreatedVideogame({
            ...createdVideogame, 
            //Array.from(e.target.selectedOptions, option => option.value)
            [e.target.name] : Array.from(e.target.selectedOptions).map(p => p.value)
        })
        setErrors(validate({...createdVideogame, [e.target.name]: e.target.value}))
    }
    
    
    return(
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
               <div>
                   <label>Name : </label>
                   <div>
                   <input name='name' type='text' placeholder='Insert name...' value={createdVideogame.name} onChange={handleChange}/>
                   {errors.name && (<div>{errors.name}</div>)}
                   </div>
               </div>
               <div>
                   <label htmlFor='description'>Description : </label>
                   <div>
                   <textarea id='description' name='description' type='text' placeholder='Insert description...' value={createdVideogame.description} onChange={handleChange}/>
                   </div>
               </div>
               <div>
                   <label>Released : </label>
                   <div>
                   <input name='released' type='text' placeholder='Insert date...' value={createdVideogame.released} onChange={handleChange}/>
                   </div>
               </div>
               <div>
                   <label>Rating : </label>
                   <div>
                   <input name='rating' type='number' min='0' max='5' placeholder='Insert number...' value={createdVideogame.rating} onChange={handleChange}/>
                   </div>
               </div>
               {/* Mapear las platforms */}
               <div>
                   <label>Platforms : </label>
                   <div>
                   <input name='platforms' type='text' placeholder='Insert platforms...' value={createdVideogame.platforms} onChange={handleChange}/>
                   </div>
               </div>
               <div>
                   <label>Image : </label>
                   <div>
                   <input name='image' type='text' placeholder='Insert url...' value={createdVideogame.image} onChange={handleChange}/>
                   {errors.image && (<div>{errors.image}</div>)}
                   </div>
               </div> 
               <div>
                  <label>Genres : </label>
                  <div>
                  <select name='genres' multiple='multiple' onChange={handleGenres}>
                    {genres.map(genre => (
                        <option value={genre.id}>{genre.name}</option>
                    ))}
                 </select>
                     {errors.genres && (<div>{errors.genres}</div>)}
                 </div>
               </div>
               <div>
                    <input type='submit' value='Send'/>
               </div>
            </form>
        </div>
    )
}