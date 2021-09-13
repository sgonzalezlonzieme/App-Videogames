import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { restartHome, cleanVideogameDetails } from "../../redux/actions"
import styles from './NavBar.module.css'

export function NavBar(){
    const dispatch = useDispatch()

    function handleOnClick(){ //
        dispatch(restartHome())
        dispatch(cleanVideogameDetails()) 
    }

    return(
        <div className={styles.container}>
            {/* Buscar un icono para la home */}
            <div>
               <Link onClick={handleOnClick}  to='/home' className={styles.links}>Home</Link>
            </div> 
            <div>
                <Link onClick={handleOnClick} to='/create' className={styles.links}>Create your videogame</Link>
            </div>
        </div>
    )
}