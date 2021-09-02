import { GET_VIDEOGAMES, GET_VIDEOGAMES_BY_QUERY, GET_VIDEOGAMES_BY_ID, POST_NEW_VIDEOGAME, GET_GENRES, ORDER_BY_GENRES, LINK_HOME, ORDER_BY_ID, ORDER_TYPE } from "../actions";


const initialState = {
      videogames: [],
      videogamesFilter: [],
      videogame: {},
      genres: [],
      newVideogame: {},
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
      case LINK_HOME: //ver si queda mejor así o sacarselo
        return {...state, videogamesFilter: state.videogames}
      case ORDER_BY_GENRES:
           if(action.payload === 'All'){
             return {...state, videogamesFilter: state.videogames}
           }else{
             return {...state, videogamesFilter: state.videogames.filter(p => p.genres?.includes(action.payload))}
           }
      case ORDER_BY_ID: 
           switch(action.payload){
              case 'All':
                return {...state, videogamesFilter: state.videogames}
              case 'Database': 
                return {...state, videogamesFilter: state.videogames.filter(p => p.id.length > 10)}//typeof String
              case 'Api':
                return {...state, videogamesFilter: state.videogames.filter(p => typeof p.id === 'number')}
              default:
                  return state;
           }
      case ORDER_TYPE:
           switch(action.payload){
              case 'All':
               return {...state, videogamesFilter: state.videogames}
              case 'A-Z':
                return {...state, videogamesFilter: [...state.videogamesFilter.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0))]}
              case 'Z-A':
                return {...state, videogamesFilter: [...state.videogamesFilter.sort((a,b) => (a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() < a.name.toLowerCase()) ? -1 : 0))]}
              case 'HIGHEST_TO_LOWEST':
                return {...state, videogamesFilter: [...state.videogamesFilter.sort((a,b) => (a.rating < b.rating) ? 1 : ((b.rating < a.rating) ? -1 : 0))]}
              case 'LOWEST_TO_HIGHEST':
                return {...state, videogamesFilter: [...state.videogamesFilter.sort((a,b) => (a.rating > b.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0))]}
              default:
                return state;
           }
      default:
          return state; 
    }
}

export default rootReducer;