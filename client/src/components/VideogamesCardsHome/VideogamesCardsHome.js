import { Link } from 'react-router-dom';
import styles from './VideogamesCardsHome.module.css'
export function VideogamesCardsHome(props){

    return(
        <div>
            <div key={props.name}>
            <Link to={`/details/${props.id}`} className={styles.name}><h1><strong>{props.name}</strong></h1></Link>   
            </div>
            <div className={styles.image}>
                <img src={props.image} alt={props.name}/>
            </div>
            <div key={props.genres} className={styles.genres}>
                {props.genres}
            </div>
        </div>
    )
}