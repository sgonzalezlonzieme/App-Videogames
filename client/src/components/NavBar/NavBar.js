import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { restartHome, cleanVideogameDetails } from "../../redux/actions"
import styles from './NavBar.module.css'


export function NavBar(){
    const dispatch = useDispatch()

    function handleOnClick(){ //
        dispatch(cleanVideogameDetails()) 
    }

    function handleOnClickIcon(){
        dispatch(cleanVideogameDetails())
        dispatch(restartHome())
    }

    return(
        <div className={styles.container}>
            {/* Buscar un icono para la home */}
            <div className={styles.home}>
               <Link onClick={handleOnClick}  to='/home' className={styles.links}>Home</Link>
            </div> 
            <div className={styles.icon}>      
               <Link onClick={handleOnClickIcon}  to='/home' className={styles.links}>
               {/* <img src='https://cdn-icons-png.flaticon.com/128/744/744141.png' width='70px' alt='Restart Home'/> */}
                <p>In-Games</p>
                <img src='https://cdn-icons-png.flaticon.com/128/744/744141.png' width='70px' alt='Restart Home'/>
              </Link>
            </div>
            <div className={styles.create}>
                <Link onClick={handleOnClick} to='/create' className={styles.links}>Create videogame</Link>
            </div>
        </div>
    )
}