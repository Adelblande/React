import { takeLatest, put } from 'redux-saga/effects';
import fb from './../firebase';

function* asyncAddContato(action){
  yield [
    console.log('asyncAddContato');
    state.push(action.payload.contato)
    fb.database().ref('contatos').set(state);
  ];
  yield put({ type: 'ADD_CONTATO',  payload: {contato: action.payload.contato} })

}

export default function* root(){
  yield [
    takeLatest('ASYNC_ADD_CONTATO', asyncAddContato)
  ];
}
