export default function(state={}, action){
    switch(action.type){
        case 'LISTAR_CONTATO':
            return [
                ...state,
                Object.assign({}, state)]
            // return state.lista
        
        default:
            return state
    }
}