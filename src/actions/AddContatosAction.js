export default {
    AddContato(contato) {
        console.log('ASYNC_ADD_CONTATO', contato);
        return {
            type: 'ASYNC_ADD_CONTATO',
            payload: {
                contato: contato
            }
        }
    }
}
