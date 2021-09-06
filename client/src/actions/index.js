import axios from 'axios';
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_VIDEOGAMES_BY_NAME = 'GET_VIDEOGAMES_BY_NAME';
export const GET_VIDEOGAMES_BY_ID = 'GET_VIDEOGAMES_BY_ID';
export const POST_NEW_VIDEOGAME = 'POST_NEW_VIDEOGAME';
export const GET_GENRES = 'GET_GENRES';
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
export const FILTER_BY_ID = 'FILTER_BY_ID';
export const ORDER_BY = 'ORDER_BY';
export const RESTART_HOME = 'RESTART_HOME';


export const getVideogames = () => { //TRY CATCH PARA ASYNC
    return async (dispatch) => {
        try{
            let response = await axios.get(`http://localhost:3001/videogames`)
            let videogames = response.data
            return dispatch({type: GET_VIDEOGAMES, payload: videogames})

        }catch(error){
           console.log(error)//CON UNA SOLA ACTION ME PUEDE ALCANZAR
           return dispatch({type: GET_VIDEOGAMES, payload: [{name: "Error" , image: 'https://www.lucushost.com/blog/wp-content/uploads/2020/06/http-error-500.png', genres: [""]}]})
        }
    }
}

export const getVideogamesByQuery = (name) => { //TRY CATCH PARA ASYNC
    return async (dispatch) => {
        let results = (await axios.get(`http://localhost:3001/videogames?name=${name}`)).data
        return dispatch({type: GET_VIDEOGAMES_BY_NAME, payload: results})
    }
}

export const getVideogameById = (id) => { //TRY CATCH PARA ASYNC
    return async (dispatch) => {
        let result = (await axios.get(`http://localhost:3001/videogame/${id}`)).data
        return dispatch({type: GET_VIDEOGAMES_BY_ID, payload: result })
    }
}

export const PostNewVideogame = (data) => {//TRY CATCH PARA ASYNC
     return async function(dispatch){//CAMBIAR NOMBRES
         //Acá está el problema!!! Probar agregandolé algo al videogame post /
        let response = await axios.post(`http://localhost:3001/videogame/`, data)
        let newVideogame = response.data
        console.log(response)
        return dispatch({type: POST_NEW_VIDEOGAME, payload: newVideogame})//confirmar puerto
     }
}

export const getGenres = () => {
    return async function(dispatch){ //TRY CATCH PARA ASYNC
        let results = (await axios.get(`http://localhost:3001/genres`)).data
        return dispatch({type: GET_GENRES, payload: results })
    }
}

export const FilterByGenre = (genre) => {  //TRY CATCH PARA ASYNC
    return async function(dispatch){
        return dispatch({type: FILTER_BY_GENRE, payload: genre})
    }
}

export const restartHome = () => {
    return async function(dispatch){//TRY CATCH PARA ASYNC
        return dispatch({type: RESTART_HOME})//TRY CATCH PARA ASYNC
    }
}

export const FilterById = (value) => { //cambiar nombre
    return async function(dispatch){
       return dispatch({type: FILTER_BY_ID, payload: value})//TRY CATCH PARA ASYNC
    }
}

export const orderByRating = (value) => {
    return async function(dispatch){
        return dispatch({type: ORDER_BY, payload: value})
    }
} 

