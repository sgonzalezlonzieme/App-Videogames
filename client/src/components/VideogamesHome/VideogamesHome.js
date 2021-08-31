import { useSelector } from "react-redux"
import { VideogamesCardsHome } from "../VideogamesCardsHome/VideogamesCardsHome"


export function VideogamesHome(){
    
    const videogames = useSelector(state => state.videogames) 
    
    return(
        <div>
            {videogames.length < 1 ? <h1>Loading...</h1> :
            videogames.map(v => (
                // Error en consola por mismo id
                <div key={v.id}>
                   <VideogamesCardsHome name={v.name} genres={v.genres?.join(', ')} image={v.image}/>
                </div>
            ))}
        </div>)
}

