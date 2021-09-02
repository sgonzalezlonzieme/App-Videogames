import axios from 'axios';
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_VIDEOGAMES_BY_QUERY = 'GET_VIDEOGAMES_BY_QUERY';
export const GET_VIDEOGAMES_BY_ID = 'GET_VIDEOGAMES_BY_ID';
export const POST_NEW_VIDEOGAME = 'POST_NEW_VIDEOGAME';
export const GET_GENRES = 'GET_GENRES';
export const ORDER_BY_GENRES = 'ORDER_BY_GENRES';
export const LINK_HOME = 'LINK_HOME';
export const ORDER_BY_ID = 'ORDER_BY_ID';
export const ORDER_TYPE = 'ORDER_TYPE';

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

export const orderByGenres = (genre) => {
    return async function(dispatch){
        return dispatch({type: ORDER_BY_GENRES, payload: genre})
    }
}

export const linkHome = () => {
    return async function(dispatch){
        return dispatch({type: LINK_HOME})
    }
}

export const orderById = (value) => {
    return async function(dispatch){
       return dispatch({type: ORDER_BY_ID, payload: value})
    }
}

export const orderByRating = (value) => {
    return async function(dispatch){
        return dispatch({type: ORDER_TYPE, payload: value})
    }
} 
