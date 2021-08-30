import { useSelector } from "react-redux"


export function VideogamesHome(){
    
    const videogames = useSelector(state => state.videogames) 

    return(
        <div>
            {videogames.map(p => (<div key={p.id}>{p.name}</div>))}
        </div>
    )
}