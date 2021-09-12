import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { restartHome, cleanVideogameDetails } from "../../actions"
import styles from './NavBar.module.css'

export function NavBar(){
    const dispatch = useDispatch()

    function handleClick(){
        dispatch(restartHome())
        dispatch(cleanVideogameDetails()) 
    }

    return(
        <div className={styles.container}>
            {/* Buscar un icono para la home */}
            <div>
               <Link onClick={handleClick}  to='/home' className={styles.links}>Home</Link>
            </div> 
            <div>
                <Link onClick={handleClick} to='/create' className={styles.links}>Create your videogame</Link>
            </div>
        </div>
    )
}