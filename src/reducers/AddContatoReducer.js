import fb from './../firebase';
export default function(state = {}, action){
    switch(action.type){
        case 'ADD_CONTATO':
            state.push(action.payload.contato)
            fb.database().ref('contatos').set(state);
            return [
                ...state,
                Object.assign({}, action.payload.contato)
            ];
            
        default:
            return state
    }
}