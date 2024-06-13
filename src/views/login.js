import React from 'react';
import FormGroup from "../components/FormGroup";
import Card from "../components/Card";
import {withRouter} from "react-router-dom";
import UsuarioService from '../app/service/usuarioService';
import LocalStorage from "../app/service/localStorageService";
<<<<<<< HEAD
import {mensagemErro} from "../components/toastr";
=======
import { mensagemErro } from "../components/toarst"
>>>>>>> 0d534c1673e9c2e3e0f07bf014cd72233491c7c7

class Login extends React.Component {

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    state = {
        email: '', senha: '', mensagemErro: null
    }

    entrar = () => {
        this.service.autenticar({
            email: this.state.email,
            senha: this.state.senha
        }).then( response => {
           LocalStorage.adicionarItem('_usuario_logado', response.data)
            this.props.history.push('/home')
        }).catch( erro => {
            mensagemErro(erro.response.data)
        })
    }

    prepareCadastrar=()=>{
        this.props.history.push('/cadastro-usuarios')
    }

    render() {
        return (
            <div className="row mt-5">
                <div className="col-md-6 offset-md-3">
                    <div className="bs-docs-section">
                        {this.state.mensagemErro && (
                            <div className="alert alert-dismissible alert-danger my-5">
                                <span>{this.state.mensagemErro}</span>
                            </div>
                        )}
                        <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                        <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                                                <input type="email"
                                                       value={this.state.email}
                                                       onChange={e => this.setState({email: e.target.value})}
                                                       className="form-control"
                                                       id="exampleInputEmail1"
                                                       aria-describedby="emailHelp"
                                                       placeholder="Digite o Email"/>
                                            </FormGroup>
                                            <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                                <input type="password"
                                                       value={this.state.senha}
                                                       onChange={e => this.setState({senha: e.target.value})}
                                                       className="form-control"
                                                       id="exampleInputPassword1"
                                                       placeholder="Password"/>
                                            </FormGroup>
                                            <button onClick={this.entrar} className="btn btn-success">
                                                <i className="pi pi-sign-in"></i>Entrar
                                            </button>
                                            <button onClick={this.prepareCadastrar}
                                                    className="btn btn-danger mx-3">
                                                <i className="pi pi-plus"></i> Cadastrar
                                            </button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(Login);