import React from 'react';
import Login from "../views/login";
import CadastroUsuarios from "../views/CadastroUsuarios";
import {HashRouter, Switch, Route} from 'react-router-dom';
import Home from "../views/Home";
import ConsultaLancamento from "../views/lancamentos/ConsultarLancamentos";


function Rotas(){
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro-usuarios" component={CadastroUsuarios} />
                <Route exact path="/consulta-lancamentos" component={ConsultaLancamento} />
                <Route exact path="/home" component={Home} />
            </Switch>
        </HashRouter>
    )
}


export default Rotas;