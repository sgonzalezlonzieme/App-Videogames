import { GET_VIDEOGAMES, CLEAN_VIDEOGAME_DETAILS, GET_VIDEOGAMES_BY_NAME, GET_VIDEOGAMES_BY_ID, POST_NEW_VIDEOGAME, GET_GENRES, FILTER_BY_GENRE, RESTART_HOME,FILTER_BY_ID, ORDER_BY} from "../actions";


const initialState = {
      videogames: [],
      videogamesByName: [],
      videogame: {},
      genres: [],
      newVideogame: [],
      genre: 'All',
      id: 'All',
      orderType: 'All'
};

//arreglar el query
function rootReducer(state = initialState, action){
    switch(action.type){
      case GET_VIDEOGAMES://para la home al comienzo
        return {...state, videogames: action.payload}
      case GET_VIDEOGAMES_BY_NAME://para el search del home
        return {...state, videogamesByName: action.payload}
      case GET_VIDEOGAMES_BY_ID://para el details
        return {...state, videogame: action.payload}
      case POST_NEW_VIDEOGAME://para el form
        return {...state, newVideogame: action.payload, videogames: [...action.payload, ...state.videogames]} 
      case GET_GENRES:
        return {...state, genres: action.payload}
      case RESTART_HOME: 
        return {...state, videogamesByName: [], genre: 'All',  id: 'All',  orderType: 'All'}
      case FILTER_BY_GENRE:
             return {...state, genre: action.payload}
      case FILTER_BY_ID: //trabajar sobre videogamesfilter
             return {...state, id: action.payload}
      case ORDER_BY:
             return {...state, orderType: action.payload}
      case CLEAN_VIDEOGAME_DETAILS:
             return {...state, videogame: []}
      default:
          return state; 
    }
}

export default rootReducer;