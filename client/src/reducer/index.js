import { GET_VIDEOGAMES, GET_VIDEOGAMES_BY_QUERY, GET_VIDEOGAMES_BY_ID, POST_NEW_VIDEOGAME, GET_GENRES } from "../actions";


const initialState = {
      videogames: [],
      videogame: {},
      genres: [],
      newVideogame: {},
};
//arreglar el query
function rootReducer(state = initialState, action){
    switch(action.type){
      case GET_VIDEOGAMES://para la home al comienzo
        return {...state, videogames: action.payload}
      case GET_VIDEOGAMES_BY_QUERY://para el search del home
        return {...state, videogames: action.payload}
      case GET_VIDEOGAMES_BY_ID://para el details
        return {...state, videogame: action.payload}
      case POST_NEW_VIDEOGAME://para el form
        return {...state, newVideogame: action.payload}
      case GET_GENRES:
        return {...state, genres: action.payload}
      default:
          return state; 
    }
}

export default rootReducer;