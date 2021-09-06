import { GET_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME, GET_VIDEOGAMES_BY_ID, POST_NEW_VIDEOGAME, GET_GENRES, FILTER_BY_GENRE, RESTART_HOME,FILTER_BY_ID, ORDER_BY } from "../actions";


const initialState = {
      videogames: [],
      videogamesFiltered: [],
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
        return {...state, videogames: action.payload}
      case GET_VIDEOGAMES_BY_NAME://para el search del home
        return {...state, videogamesFiltered: action.payload}
      case GET_VIDEOGAMES_BY_ID://para el details
        return {...state, videogame: action.payload}
      case POST_NEW_VIDEOGAME://para el form
        return {...state, newVideogame: action.payload, videogames: [...state.videogames, action.payload]} 
      case GET_GENRES:
        return {...state, genres: action.payload}
      case RESTART_HOME: 
        return {...state, videogamesFiltered: []}
      case FILTER_BY_GENRE:
           if(action.payload === 'All'){
             return {...state, videogamesFiltered: [], filterByGenres: action.payload}
           }else{
             return {...state, videogamesFiltered: state.videogames.filter(p => p.genres?.includes(action.payload)), filterByGenres: action.payload}
           }
      case FILTER_BY_ID: //trabajar sobre videogamesfilter
           switch(action.payload){
              case 'All':
                return {...state, videogamesFiltered: [], filterById: action.payload}
              case 'DbVideogames': 
                return {...state, videogamesFiltered: state.videogames.filter(p => p.id.length > 10), filterById: action.payload}//typeof String
              case 'ApiVideogames':
                return {...state, videogamesFiltered: state.videogames.filter(p => typeof p.id === 'number'), filterById: action.payload}
              default:
                  return state;
           }
      case ORDER_BY:
           switch(action.payload){//sobre videosgamesfilter
              case 'Default order':
               return {...state, videogamesFiltered: [], orderBy: action.payload}
              case 'A-Z': //spread operator
                return {...state, videogames: [...state.videogamesFiltered.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0))], orderBy: action.payload}
              case 'Z-A': 
                return {...state, videogames: [...state.videogamesFiltered.sort((a,b) => (a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() < a.name.toLowerCase()) ? -1 : 0))], orderBy: action.payload}
              case 'HIGHEST_TO_LOWEST':
                return {...state, videogames: [...state.videogamesFiltered.sort((a,b) => (a.rating < b.rating) ? 1 : ((b.rating < a.rating) ? -1 : 0))], orderBy: action.payload}
              case 'LOWEST_TO_HIGHEST':
                return {...state, videogames: [...state.videogamesFiltered.sort((a,b) => (a.rating > b.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0))], orderBy: action.payload}
              default:
                return state;
           }
      default:
          return state; 
    }
}

export default rootReducer;