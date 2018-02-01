export default {
    AddContato(contato) {
        return {
            type: 'ADD_CONTATO',
            payload: {
                contato: contato
            } 
        }
    }
}

