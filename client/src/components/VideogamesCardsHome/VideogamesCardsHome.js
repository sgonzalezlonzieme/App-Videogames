import { Link } from 'react-router-dom';
import styles from './VideogamesCardsHome.module.css'

export function VideogamesCardsHome(props){

    return(
        <div>
             <Link className={styles.container} to={`/details/${props.id}`}>
             <div key={props.name}>
             <div className={styles.name}><h1><strong>{props.name}</strong></h1></div>   
             </div>
             <div className={styles.image}>
                <img src={props.image ? props.image : "https://i.3djuegos.com/juegos/9205/zelda_wii_u/fotos/noticias/zelda_wii_u-5510112.webp"} alt={props.name}/>
             </div>
             {/* div no */}
             <p key={props.genres} className={styles.genres}>
                {props.genres}
            </p>
            </Link>
        </div>
    )
}