
export function filterByAndOrderBy(videogames, videogamesByName, genre, id, orderType){

    //Utilizo un espacio de memoria distinto por el sort
    videogames = videogamesByName.length ? videogamesByName : [...videogames];
    console.log(videogames, "FUNCION")

    if(genre !== 'All'){
           videogames = videogames.filter(p => p.genres?.includes(genre))
       }

    if(id !== 'All'){
        if(id === 'DbVideogames'){
            videogames = videogames.filter(p => p.id.length > 10)
        }else if(id === 'ApiVideogames'){
            videogames = videogames.filter(p => typeof p.id === 'number')
        }
    }

    if(orderType !== 'Default order'){
        if(orderType === 'A-Z'){
            videogames = [...videogames.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0))]
        }else if(orderType === 'Z-A'){
            videogames = [...videogames.sort((a,b) => (a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() < a.name.toLowerCase()) ? -1 : 0))]
        }else if(orderType === 'HIGHEST_TO_LOWEST'){
            videogames = [...videogames.sort((a,b) => (a.rating < b.rating) ? 1 : ((b.rating < a.rating) ? -1 : 0))]
        }else if(orderType === 'LOWEST_TO_HIGHEST'){
            videogames = [...videogames.sort((a,b) => (a.rating > b.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0))]
        }
    }

    if(videogames.length < 1){
        videogames = ['No videogames found']
    }

    return videogames
}