import React from 'react';
import Card from "../components/Card";
import FormGroup from '../components/FormGroup';
import { withRouter } from 'react-router-dom';
import UsuarioService from "../app/service/usuarioService";
import {mensagemSucesso, mensagemErro } from "../components/toastr";

class CadastroUsuarios extends React.Component {

    constructor() {
        super();
        this.service = new UsuarioService();
    }
    state={
        nome:'',
        email:'',
        senha:'',
        senharepeticao:''
}
validar() {
    const msg = [];
  
    if (!this.state.nome.trim()) { // Verifica se o nome não está vazio após remover espaços em branco
      msg.push('O nome é obrigatório');
    }
  
    if (!this.state.email.trim()) { // Verifica se o email não está vazio após remover espaços em branco
      msg.push('O email é obrigatório');
    } else if (!this.state.email.match(/^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,}$/i)) { 
      // Expressão regular melhorada e com flag 'i' para ignorar maiúsculas/minúsculas
      msg.push('Email inválido');
    }
  
    if (!this.state.senha || !this.state.senharepeticao) {
      msg.push('Digite a senha 2 vezes');
    } else if (this.state.senha !== this.state.senharepeticao) {
      msg.push('As senhas devem ser iguais');
    }
  
    return msg;
  }



    cadastrar=()=>{

        const msg = this.validar();

        if(msg && msg.length > 0 ){
            msg.forEach((msg, index) => { mensagemErro(msg)});
            return false;
        }

         const usuario = {
             nome: this.state.nome,
             email:this.state.email,
             senha:this.state.senha
         }
         this.service.salvar(usuario).then(response => {
             mensagemSucesso("Usuario cadastrado com sucesso")
             this.props.history.push('/login')
         }).catch(error => {mensagemErro(error.response.data)})
    }

    cancelar=()=>{
        this.props.history.push('/login')
    }

    render(){
        return(
            <Card title="Cadastro de Usuário">
            <div className="row">
                <div className="col-lg-12">
                    <div className="bs-component">
                        <FormGroup label="Nome: *" htmlFor="inputNome">
                            <input type="text" 
                                   id="inputNome" 
                                   className="form-control"
                                   name="nome"
                                   onChange={e => this.setState({nome: e.target.value})} />
                        </FormGroup>
                        <FormGroup label="Email: *" htmlFor="inputEmail">
                            <input type="email" 
                                   id="inputEmail"
                                   className="form-control"
                                   name="email"
                                   onChange={e => this.setState({email: e.target.value})} />
                        </FormGroup>
                        <FormGroup label="Senha: *" htmlFor="inputSenha">
                            <input type="password" 
                                   id="inputSenha"
                                   className="form-control"
                                   name="senha"
                                   onChange={e => this.setState({senha: e.target.value})} />
                        </FormGroup>
                        <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                            <input type="password" 
                                   id="inputRepitaSenha"
                                   className="form-control"
                                   name="Repetida"
                                   onChange={e => this.setState({senharepeticao: e.target.value})} />
                        </FormGroup>
                        <button onClick={this.cadastrar} type="button" className="btn btn-success">
                            <i className="pi pi-save"></i> Salvar
                        </button>
                        <button onClick={this.cancelar} type="button" className="btn btn-danger mx-3">
                            <i className="pi pi-times"></i> Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </Card>
        )
    }
}

export default  withRouter(CadastroUsuarios);