import React from 'react';
import FormGroup from '../../components/FormGroup';
import SelectMenu from '../../components/SelectMenu';
import Card from '../../components/Card';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import LancamentosTable from './lancamentosTable';
import LancamentosService from '../../app/service/lancamentosServices';
import LocalStorageService from "../../app/service/localStorageService";

class ConsultarLancamentos extends React.Component {

    state = {
        ano: '',
        mes: '',
        tipo: '',
        descricao: '',
        lancamentos: []
    }
    buscar = () => {
        console.log(this.state)
    }


    constructor() {
        super();
        this.service = new LancamentosService();
    }

    buscar = () => {
        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado');
        const lancamentoFiltro = {
            ano: this.state.ano,
            mes: this.state.mes,
            tipo: this.state.tipo,
            descricao: this.state.descricao,
            usuario: usuarioLogado.id
        }

        this.service.consultar(lancamentoFiltro).then(response => { this.setState({ lancamentos: response.data }) }).catch(error => { console.log(error) })
    }

    render() {
        const lista = [
            { label: "Selecione o mes....", value: '' },
            { label: "Janeiro ", value: 1 },
            { label: "Fevereiro", value: 2 },
            { label: "Março", value: 3 },
            { label: "Abril", value: 4 },
            { label: "Maio", value: 5 },
            { label: "Junho", value: 6 },
            { label: "Julho", value: 7 },
            { label: "Agosto", value: 8 },
            { label: "Setembro", value: 9 },
            { label: "Outubro", value: 10 },
            { label: "Novembro", value: 11 },
            { label: "Dezembro", value: 12 }
        ]


        const tipos = [
            { label: 'Selecione...', value: '' },
            { label: 'Despesa....', value: 'DESPESA' }
        ]



        return (
            <Card title={"Consulta Lancamentos"}>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='bs-component'>

                            <FormGroup htmlFor={"inputMes"} label={"Ano: "}>
                                <input className={'form-control'} id={'inputAno'} value={this.state.ano}
                                    onChange={e => this.setState({ ano: e.target.value })} placeholder={'Digite o ano'} />
                            </FormGroup>

                            <FormGroup htmlFor={"inputDescricao"} label={"Descricao: "}>
                                <input className={'form-control'} id={'inputDescricao'} value={this.state.descricao}
                                    onChange={e => this.setState({ descricao: e.target.value })} placeholder={'Digite a descricao'} />
                            </FormGroup>

                            <FormGroup htmlFor={'inputMes'} label={'Mes:'}>
                                <SelectMenu id={"inputMes"} className={'form-control'} lista={lista} value={this.state.mes}
                                    onChange={e => this.setState({ mes: e.target.value })} />
                            </FormGroup>

                            <FormGroup htmlFor={'inputTipo'} label={'Tipo lancamento'}>
                                <SelectMenu id={'inputTipo'} className={'form-control'} lista={tipos} value={this.state.tipo}
                                    onChange={e => this.setState({ tipo: e.target.value })} />
                            </FormGroup>
                            <button className='btn btn-primary' mr={3} mt={4} onClick={this.buscar}>
                                Buscar
                            </button>
                            <button className='btn btn-success' mt={4}>
                                Cadastrar
                            </button>

                        </div>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className="col-md-12">
                        <div className="bs-component">
                            <LancamentosTable lancamentos={this.state.lancamentos} />
                        </div>
                    </div>
                </div>
            </Card>
        )
    }

}


export default withRouter(ConsultarLancamentos);
