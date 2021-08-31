import axios from 'axios';
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_VIDEOGAMES_BY_QUERY = 'GET_VIDEOGAMES_BY_QUERY'
export const GET_VIDEOGAMES_BY_ID = 'GET_VIDEOGAMES_BY_ID';
export const POST_NEW_VIDEOGAME = 'POST_NEW_VIDEOGAME'


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
        let result = (await axios.post(`http://localhost:3001/create`, data)).data
        return dispatch({type: POST_NEW_VIDEOGAME, payload: result})
     }
}
