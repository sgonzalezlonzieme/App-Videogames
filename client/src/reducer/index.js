import { GET_VIDEOGAMES, GET_VIDEOGAMES_BY_QUERY, GET_VIDEOGAMES_BY_ID, POST_NEW_VIDEOGAME, GET_GENRES, FILTER_BY_GENRE, RESTART_HOME,FILTER_BY_ID, ORDER_BY } from "../actions";


const initialState = {
      videogames: [],
      videogamesFilter: [],
      videogame: {},
      genres: [],
      newVideogame: {},
      filterByGenres: 'All',
      filterById: 'All',
      orderBy: 'All',
};

//arreglar el query
function rootReducer(state = initialState, action){
    switch(action.type){
      case GET_VIDEOGAMES://para la home al comienzo
        return {...state, videogames: action.payload, videogamesFilter: action.payload}
      case GET_VIDEOGAMES_BY_QUERY://para el search del home
        return {...state, videogamesFilter: action.payload}
      case GET_VIDEOGAMES_BY_ID://para el details
        return {...state, videogame: action.payload}
      case POST_NEW_VIDEOGAME://para el form
        return {...state, newVideogame: action.payload}
      case GET_GENRES:
        return {...state, genres: action.payload}
      case RESTART_HOME: //ver si queda mejor así o sacarselo
        return {...state, videogamesFilter: state.videogames}
      case FILTER_BY_GENRE:
           if(action.payload === 'All'){
             return {...state, videogamesFilter: state.videogames, filterByGenres: action.payload}
           }else{
             return {...state, videogamesFilter: state.videogames.filter(p => p.genres?.includes(action.payload)), filterByGenres: action.payload}
           }
      case FILTER_BY_ID: 
           switch(action.payload){
              case 'All':
                return {...state, videogamesFilter: state.videogames, filterById: action.payload}
              case 'DbVideogames': 
                return {...state, videogamesFilter: state.videogames.filter(p => p.id.length > 10), filterById: action.payload}//typeof String
              case 'ApiVideogames':
                return {...state, videogamesFilter: state.videogames.filter(p => typeof p.id === 'number'), filterById: action.payload}
              default:
                  return state;
           }
      case ORDER_BY:
           switch(action.payload){//sobre videosgamesfilter
              case 'Default order':
               return {...state, videogamesFilter: [...state.videogames], orderBy: action.payload}
              case 'A-Z': //spread operator
                return {...state, videogamesFilter: [...state.videogamesFilter.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0))], orderBy: action.payload}
              case 'Z-A': 
                return {...state, videogamesFilter: [...state.videogamesFilter.sort((a,b) => (a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() < a.name.toLowerCase()) ? -1 : 0))], orderBy: action.payload}
              case 'HIGHEST_TO_LOWEST':
                return {...state, videogamesFilter: [...state.videogamesFilter.sort((a,b) => (a.rating < b.rating) ? 1 : ((b.rating < a.rating) ? -1 : 0))], orderBy: action.payload}
              case 'LOWEST_TO_HIGHEST':
                return {...state, videogamesFilter: [...state.videogamesFilter.sort((a,b) => (a.rating > b.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0))], orderBy: action.payload}
              default:
                return state;
           }
      default:
          return state; 
    }
}

export default rootReducer;