import {DELETE_FAV, ADD_FAV} from "./action"

const initialState = {
    myFavorites: [],
}

const rootReducer = (state= initialState, {type, payload}) => {
    switch(type){
        case ADD_FAV: 
            return{
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }

        case DELETE_FAV:
            let filterFav = state.myFavorites.filter((char)=> char.id !== payload)
            return{
                ...state,
                myFavorites: filterFav,
            }
            
        default:
            return {...state}
    }
}

export default rootReducer;