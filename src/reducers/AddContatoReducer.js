
export default function(state = {}, action){
    switch(action.type){
        case 'ADD_CONTATO':
          console.log('contatoReducer');
          return [
              ...state,
              Object.assign({}, action.payload.contato)
          ];

        default:
          return state
    }
}
