import { VideogameCardDetails } from "../VideogameCardDetails/VideogameCardDetails"
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import { getVideogameById } from "../../actions";

export function VideogameDetails(props){
   console.log(props)
    const dispatch = useDispatch()
    const videogame = useSelector(state => state.videogame)
    const id = props.match.params.id

    useEffect(() => {
      dispatch(getVideogameById(id))
    }, []) // eslint-disable-line react-hooks/exhaustive-deps 
    

    return(
        <div>
            <VideogameCardDetails name={videogame.name} genres={videogame.genres} 
            image={videogame.image} released={videogame.released} rating={videogame.rating} platforms={videogame.platforms} description={videogame.description}/>
        </div>
    )
}