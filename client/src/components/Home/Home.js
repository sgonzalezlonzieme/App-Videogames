import { VideogamesHome } from "../VideogamesHome/VideogamesHome"
import { HomeInputSearch} from "../HomeInputSearch/HomeInputSearch"
import { getVideogames } from "../../actions"
import { Filtered } from "../Filtered/Filtered"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"



export function Home(){
  const videogames = useSelector(state => state.videogames);
  const dispatch = useDispatch()

  useEffect(() => {
    if(videogames.length < 1){
      dispatch(getVideogames())
    }
 }, []) // eslint-disable-line react-hooks/exhaustive-deps 
     
    return(
        <div>
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