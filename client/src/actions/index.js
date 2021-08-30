import axios from 'axios';
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';

export const getVideogames = () => {
    return async (dispatch) => {
        let results = (await axios.get(`http://localhost:3001/videogames`)).data
        return dispatch({type: GET_VIDEOGAMES, payload: results})
    }
}

