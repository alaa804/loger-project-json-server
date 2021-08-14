import {
    GET_LOGS,
    ADD_LOG,
    SET_LOADING,
    LOGS_ERROR,
    DELETE_LOG,
    CLEAR_CURRENT,
    SET_CURRENT,
    UPDATE_LOG,
    SEARCH_LOGS
} from '../actions/types';



const initialState = {
    logs : null,
    current : null,
    loading : false,
    error : null
}


export default (state = initialState , action) => {
   const { type , payload } = action;   
  
   switch(type) {
       case GET_LOGS:
           return { 
            ...state,
             logs : payload,
             loading : false
           } 
        case ADD_LOG:
            return {
                ...state,
                logs : [payload, ...state.logs],
                loading : false
            } 
        case DELETE_LOG:
            return {
                ...state,
                logs : state.logs.filter(log => log.id !== payload),
                loading : false
            }
        case UPDATE_LOG:
            return {
                logs : state.logs.map(log => log.id === payload.id ? payload : log)      
            }
         case SEARCH_LOGS:
             return {
                ...state,
                logs : payload,
                loading : false
             }       
        case SET_CURRENT:
            return {
                ...state,
                current : payload
            }  
            case CLEAR_CURRENT:
                return {
                    ...state,
                    current : null
                }  
                           
       case SET_LOADING:
           return {
               ...state,
               loading : true
          }
        case LOGS_ERROR:
            console.error(payload);
            return {
                ...state,
                error : payload
            }    
       default :
        return state;
   }
}