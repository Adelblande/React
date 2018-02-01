import React, {Component} from 'react'
import { connect } from 'react-redux'
import AddContatosAction from './../actions/AddContatosAction'

class AddContatos extends Component {
    constructor(props){
        super(props)
        this.handlerAddContato = this.handlerAddContato.bind(this)
    }
    handlerAddContato(){
        let contato = {'nome': this.refs.nome.value, 'telefone': this.refs.telefone.value, 'email': this.refs.email.value}
        this.props.AddContato(contato)
        this.refs.nome.value = ''
        this.refs.telefone.value = ''
        this.refs.email.value = ''
    }
    render(){
        return(
            <div className="columns">
                <div className="column"></div>
                <div className="column">
                    <h2 className='title'>Agenda de contatos</h2>
                    <form>
                        <div className="field">
                          <label className="label">Name</label>
                          <div className="control">
                            <input className="input" type="text" ref='nome' />
                          </div>
                        </div>
                        <div className="field">
                          <label className="label">Telefone</label>
                          <div className="control">
                            <input className="input" type="text" ref='telefone' />
                          </div>
                        </div>
                        <div className="field">
                          <label className="label">E-mail</label>
                          <div className="control">
                            <input className="input" type="text" ref='email' />
                          </div>
                        </div>
                        <button type='button' className="button is-link is-outlined" onClick={ this.handlerAddContato }>Adicionar</button>
                    </form>
                </div>
                <div className="column"></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contatos: state.contatos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddContato: (contato) => dispatch(AddContatosAction.AddContato(contato))
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContatos)