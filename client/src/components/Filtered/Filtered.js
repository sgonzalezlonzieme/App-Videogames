import { useSelector, useDispatch } from "react-redux"
import { filterByGenre, filterById, orderByRating} from "../../redux/actions";
import styles from './Filtered.module.css'
import icon from '../../img/starwars.png'
import icon2 from '../../img/Starcraft2.png'

export function Filtered(){

    const {genres} = useSelector(state => state)
    
    const dispatch = useDispatch()
  
    function handleChangeGenres(e){
        dispatch(filterByGenre(e.target.value))
    } 

    function handleChangeId(e){
        dispatch(filterById(e.target.value))
    }

    function handleChangeOrder(e){ 
        dispatch(orderByRating(e.target.value))
    }

    return(
        <div className={styles.container}>
            <img src={icon} width="100px" alt="In-Games"/>
            <select onChange={handleChangeGenres} className={styles.select}>
               <option value='All'>All Genres</option>
               {genres.map(p => (
                 <option value={p.name}>{p.name}</option>
               ))}
            </select>
            <select onChange={handleChangeId} className={styles.select}>
                <option value='All'>All Videogames</option>
                <option value='DbVideogames'>My Videogames</option>
                <option value='ApiVideogames'>Page Videogames</option>
            </select>
            <select onChange={handleChangeOrder} className={styles.select}>
                <option value='Default order'>Default order</option> 
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
                <option value='HIGHEST_TO_LOWEST'>Highest rating</option>
                <option value='LOWEST_TO_HIGHEST'>Lowest rating</option>
            </select>
            <img src={icon2} width="100px" alt="In-Games"/>
        </div>
    )
}
