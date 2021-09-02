import { useSelector } from "react-redux";
import { VideogamesCardsHome } from "../VideogamesCardsHome/VideogamesCardsHome";
// import { useEffect, useState } from "react";



export function VideogamesHome(){
    
    const videogamesFilter = useSelector(state => state.videogamesFilter) 

    return(
        <div>
            {videogamesFilter.length < 1 ? <h1>Loading...</h1> :
             videogamesFilter.map(games => (
                // Error en consola por mismo id
                <div>
                   <VideogamesCardsHome id={games.id} name={games.name} genres={games.genres?.join(', ')} image={games.image}/>
                </div>
            ))}
        </div>)
}

