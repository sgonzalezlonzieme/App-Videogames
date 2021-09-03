import axios from 'axios';
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_VIDEOGAMES_BY_QUERY = 'GET_VIDEOGAMES_BY_QUERY';
export const GET_VIDEOGAMES_BY_ID = 'GET_VIDEOGAMES_BY_ID';
export const POST_NEW_VIDEOGAME = 'POST_NEW_VIDEOGAME';
export const GET_GENRES = 'GET_GENRES';
export const RESTART_HOME = 'RESTART_HOME';
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
export const FILTER_BY_ID = 'FILTER_BY_ID';
export const ORDER_BY = 'ORDER_BY';

export const getVideogames = () => {
    return async (dispatch) => {
        let results = (await axios.get(`http://localhost:3001/videogames`)).data
        return dispatch({type: GET_VIDEOGAMES, payload: results})
    }
}

export const getVideogamesByQuery = (name) => {
    return async (dispatch) => {
        let results = (await axios.get(`http://localhost:3001/videogames?name=${name}`)).data
        return dispatch({type: GET_VIDEOGAMES_BY_QUERY, payload: results})
    }
}

export const getVideogameById = (id) => {
    return async (dispatch) => {
        let result = (await axios.get(`http://localhost:3001/videogame/${id}`)).data
        return dispatch({type: GET_VIDEOGAMES_BY_ID, payload: result })
    }
}

export const PostNewVideogame = (data) => {
     return async function(dispatch){
         //Acá está el problema!!! Probar agregandolé algo al videogame post /
        let result = (await axios.post(`http://localhost:3001/videogame/`, data)).data 
        return dispatch({type: POST_NEW_VIDEOGAME, payload: result})//confirmar puerto
     }
}

export const getGenres = () => {
    return async function(dispatch){
        let results = (await axios.get(`http://localhost:3001/genres`)).data
        return dispatch({type: GET_GENRES, payload: results })
    }
}

export const FilterByGenre = (genre) => { 
    return async function(dispatch){
        return dispatch({type: FILTER_BY_GENRE, payload: genre})
    }
}

export const restartHome = () => {
    return async function(dispatch){
        return dispatch({type: RESTART_HOME})
    }
}

export const FilterById = (value) => { //cambiar nombre
    return async function(dispatch){
       return dispatch({type: FILTER_BY_ID, payload: value})
    }
}

export const orderByRating = (value) => {
    return async function(dispatch){
        return dispatch({type: ORDER_BY, payload: value})
    }
} 
