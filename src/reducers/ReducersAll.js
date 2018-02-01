export default function(state={}, action){
    switch(action.type){
        case 'LISTAR_CONTATO':
            return Object.assign({}, state, {lista: action.payload.lista})
            
        // case 'ADD_CONTATO':
        //     // return Object.assign({}, state, {contatos: state.contatos.push(action.payload.contato)})
        //     return  {contatos: state.contatos.push(action.payload.contato)}
        
        // case 'EXCLUIR_CONTATO':
        //     return action.payload;
            
        default:
            return state;
    }
}