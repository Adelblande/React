import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'
import {Provider} from 'react-redux'
import configureStore from './store'
import fb from './firebase'
import registerServiceWorker from './registerServiceWorker'

var db = fb.database();
var refContatos = db.ref("contatos");
var contatos = [];
refContatos.orderByChild("nome").on("child_added", function(snapshot) {
    contatos.push(snapshot.val());
});

this.state = {
    contatos
}

const store = configureStore(this.state)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
