import { VideogamesHome } from "../VideogamesHome/VideogamesHome"
import { HomeInputSearch} from "../HomeInputSearch/HomeInputSearch"
import { getVideogames, getGenres } from "../../redux/actions"
import { Filtered } from "../Filtered/Filtered"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import styles from "./Home.module.css"

export function Home(){
  const videogames = useSelector(state => state.videogames);
  const genres = useSelector(state => state.genres)
  const dispatch = useDispatch()
  

  useEffect(() => {
    if(videogames.length < 1){
      dispatch(getVideogames())
    }
    if(genres.length < 1){
      dispatch(getGenres())
    }
 }, []) // eslint-disable-line react-hooks/exhaustive-deps 
     
    return(
        <div className={styles.container}>
           <div>
             <HomeInputSearch />
           </div>
           <div>
             <Filtered/>
           </div>
           <div>
             <VideogamesHome/>
           </div> 
        </div>
    )
}