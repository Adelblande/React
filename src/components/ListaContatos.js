// import React, {Component} from 'react'
import React from 'react'
// import { connect } from 'react-redux'
// import CarregaListaAction from './../actions/CarregaListaAction'
const ListaContatos = () => {
// class ListaContatos extends Component {
    // constructor(props){
    //     super(props)
    //     this.handlerCarregaLista = this.handlerCarregaLista.bind(this)
    // }
    // handlerCarregaLista() {
    //   this.props.carregaLista() 
    // }
    // render(){
        return (
            <div className='columns'>
                <div className='column'></div>
                <div className='table'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Telefone</th>
                                <th>E-mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.contatos.map((contato, index) => {
                                return (
                                    <tr>
                                        <td>{contato.nome}</td>
                                        <td>{contato.telefone}</td>
                                        <td>{contato.email}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>    
                <div className='column'></div>
            </div>
        );
    // }
}

// const mapStateToProps = (state) => {
//     return {
//         lista: state.contatos
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//       carregaLista: (lista) => dispatch(CarregaListaAction.carregaLista(lista))
//     }    
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ListaContatos)
export default ListaContatos;