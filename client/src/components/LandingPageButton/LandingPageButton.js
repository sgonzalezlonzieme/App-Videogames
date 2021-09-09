import { Link } from "react-router-dom";
import styles from './LandingPageButton.module.css'
console.log(styles)

export function LandingPageButton(){
     
    return(<div>
       <Link className={styles.button} to='/home'>Ready?</Link>
    </div>)
}

