import { GET_VIDEOGAMES, GET_VIDEOGAMES_BY_QUERY, GET_VIDEOGAMES_BY_ID } from "../actions";


const initialState = {
      videogames: [],
      videogame: {},
};

function rootReducer(state = initialState, action){
    switch(action.type){
      case GET_VIDEOGAMES:
        return {...state, videogames: action.payload}
      case GET_VIDEOGAMES_BY_QUERY:
        return {...state, videogames: action.payload}
      case GET_VIDEOGAMES_BY_ID:
        return {...state, videogame: action.payload}
      default:
          return state; 
    }
}

export default rootReducer;