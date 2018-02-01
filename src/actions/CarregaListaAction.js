export default { 
    carregaLista(lista) {
        return {
            type: 'LISTAR_CONTATO',
            payload: {
                lista: lista
            }
        }
    }
}
