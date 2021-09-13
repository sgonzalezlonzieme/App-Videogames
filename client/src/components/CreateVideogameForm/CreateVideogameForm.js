import { useDispatch, useSelector } from "react-redux";
import { postNewVideogame, getGenres } from "../../redux/actions";
import { useState, useEffect } from "react";
import styles from './CreateVideogameForm.module.css'

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
        }else if (!/([A-Z]|[a-z])\w+/.test(createdVideogame.name)) {
            errors.name = 'name is invalid'
        }else{
            errors.name = '';
        }
        if(!createdVideogame.image){
            errors.image = 'url is required'
        }else{
            errors.image = '';
        }
        // https://regexr.com/39nr7
        if(!createdVideogame.genres){
            errors.genres = 'genres are required'
        }else{
            errors.genres = '';
        }

        if(!createdVideogame.rating){
            errors.rating = 'rating is required(0-5)'
        }else{
            errors.rating = '';
        }
        return errors;
    }
    
    const handleSubmit = (e) => {
            e.preventDefault()
            if(createdVideogame.name && createdVideogame.image && createdVideogame.genres){
              dispatch(postNewVideogame(createdVideogame))
            }
            alert("Videogame created")

        }
    
    const handleChange = (e) => {
        setCreatedVideogame({
            ...createdVideogame, 
            [e.target.name] : e.target.value
        })
        setErrors(validate({...createdVideogame, [e.target.name]: e.target.value}))
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
        <div className={styles.container}>
            <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
               <div>
                   <label>Name : </label>
                   <div>
                   {errors.name && (<div className={styles.errors}><strong>{errors.name}</strong></div>)}
                   <input name='name' type='text' placeholder='Insert name...' value={createdVideogame.name} onChange={handleChange}/>
                   
                   </div>
               </div>
               <div>
                   <label htmlFor='description'>Description : </label>
                   <div>
                   <textarea className={styles.description} id='description' name='description' type='text' placeholder='Insert description...' value={createdVideogame.description} onChange={handleChange}/>
                   </div>
               </div>
               <div>
                   <label>Released : </label>
                   <div>
                   <input name='released' type='date' placeholder='Insert date...' value={createdVideogame.released} onChange={handleChange}/>
                   </div>
               </div>
               <div>
                   <label>Rating : </label>
                   <div>
                   {errors.rating && (<div className={styles.errors}><strong>{errors.rating}</strong></div>)}
                   <input name='rating' type='number' min='0' max='5' step='.01' placeholder='Insert number...' value={createdVideogame.rating} onChange={handleChange}/>
                   </div>
               </div>
               {/* Mapear las platforms */}
               <div>
                   <label>Platforms : </label>
                   <div>
                   <textarea className={styles.platforms} name='platforms' type='text' placeholder='Insert platforms...' value={createdVideogame.platforms} onChange={handleChange}/>
                   </div>
               </div>
               <div>
                   <label>Image : </label>
                   <div>
                   {errors.image && (<div className={styles.errors}><strong>{errors.image}</strong></div>)}
                   <input name='image' type='url' placeholder='Insert url...' value={createdVideogame.image} onChange={handleChange}/>
                   </div>
               </div> 
               <div>
                  <label>Genres : </label>
                  <div>
                      {errors.genres && (<div className={styles.errors}><strong>{errors.genres}</strong></div>)}
                  <select name='genres' multiple='multiple' onChange={handleGenres}>
                    {genres.map(genre => (
                        <option value={genre.id}>{genre.name}</option>
                    ))}
                 </select>
                 </div>
               </div>
               <div>
                    {
                    !createdVideogame.name || !createdVideogame.image || !createdVideogame.genres || !createdVideogame.rating ?
                    <button type='submit' disabled>Send</button> :
                    <button type='submit'>Send</button>
                     }  
               </div>
            </form>
        </div>
    )
}