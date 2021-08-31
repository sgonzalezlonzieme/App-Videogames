import { GET_VIDEOGAMES, GET_VIDEOGAMES_BY_QUERY, GET_VIDEOGAMES_BY_ID, POST_NEW_VIDEOGAME } from "../actions";


const initialState = {
      videogames: [],
      videogame: {},
      newVideogame: {},
};
//arreglar el query
function rootReducer(state = initialState, action){
    switch(action.type){
      case GET_VIDEOGAMES:
        return {...state, videogames: action.payload}
      case GET_VIDEOGAMES_BY_QUERY:
        return {...state, videogames: action.payload}
      case GET_VIDEOGAMES_BY_ID:
        return {...state, videogame: action.payload}
      case POST_NEW_VIDEOGAME:
        return {...state, newVideogame: action.payload}
      default:
          return state; 
    }
}

export default rootReducer;