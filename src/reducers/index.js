import {combineReducers} from 'redux'
import ListaReducers from './ListaReducers'
import AddContatoReducer from './AddContatoReducer'


const Reducers = combineReducers({
    lista: ListaReducers,
    contatos: AddContatoReducer
});

export default Reducers