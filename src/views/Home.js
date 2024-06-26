import React from 'react';
import UsuarioService from '../app/service/usuarioService';
import LocalStorage from '../app/service/localStorageService';

class Home extends React.Component{

    constructor(){
        super();
        this.usuarioService = new UsuarioService();
    }

    state={
        saldo:0
    }


    componentDidMount(){
        const usuarioLogado = LocalStorage.obterItem("_usuario_logado");

        this.usuarioService.oberSaldoPorUsuario(usuarioLogado.id).then(response => {this.setState({saldo: response.data})})
            .catch(error => {console.log(error.response)});

    }

render(){
    return (
        <div className="jumbotron mt-5 pt-5">
            <h1 className="display-3">Bem vindo!</h1>
            <p className="lead">Esse é seu sistema de finanças.</p>
            <p className="lead">Seu saldo para o mês atual é de R$ {this.state.saldo} </p>
            <hr className="my-4" />
            <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" 
                href="/cadastro-usuarios" 
                role="button"><i className="pi pi-users"></i>  
                 Cadastrar Usuário
                </a>
                <a className="btn btn-danger btn-lg mx-4" 
                href="/cadastro-lancamentos" 
                role="button"><i className="pi pi-money-bill"></i>  
                 Cadastrar Lançamento
                </a>
            </p>
        </div>
    )
}
}

export default Home
