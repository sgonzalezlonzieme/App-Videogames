import { VideogameCardDetails } from "../VideogameCardDetails/VideogameCardDetails"
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import { getVideogameById } from "../../actions";
import styles from './VideogameDetails.module.css'

export function VideogameDetails(props){
   console.log(props)//Estudiar props.match.params
    const dispatch = useDispatch()
    const videogame = useSelector(state => state.videogame)
    const id = props.match.params.id

    useEffect(() => {
      dispatch(getVideogameById(id))
    }, []) // eslint-disable-line react-hooks/exhaustive-deps 
    

    return(
        <div className={styles.container}>
            <VideogameCardDetails name={videogame.name} genres={videogame.genres} 
            image={videogame.image} released={videogame.released} rating={videogame.rating} platforms={videogame.platforms} description={videogame.description}/>
        </div>
    )
}