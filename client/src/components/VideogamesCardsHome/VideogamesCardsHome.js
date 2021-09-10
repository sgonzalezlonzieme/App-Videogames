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
                <img src={props.image} alt={props.name}/>
             </div>
             <div key={props.genres} className={styles.genres}>
                {props.genres}
            </div>
            </Link>
        </div>
    )
}