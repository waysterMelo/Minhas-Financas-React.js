import React from 'react';
import FormGroup from "../components/FormGroup";
import Card from "../components/Card";
import {withRouter} from "react-router-dom";
import axios from "axios";

class Login extends React.Component {

    state = {
        email: '', senha: '', mensagemErro: null
    }

    entrar= async () => {
        axios.post('http://localhost:8080/usuarios/autenticar', {
            email: this.state.email,
            senha: this.state.senha
        }).then(response => {
           localStorage.setItem('_usuario_logado', JSON.stringify(response.data))
           this.props.history.push('/home')
        })
            .catch(error => {
               this.setState({mensagemErro: error.response.data});
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