import React from 'react';
import FormGroup from '../../components/FormGroup';
import SelectMenu from '../../components/SelectMenu';
import Card from '../../components/Card';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import LancamentosTable from './lancamentosTable';

class ConsultarLancamentos extends React.Component{
    render(){
        const lista = [
            {label: "Selecione o mes....", value: ''},
            {label: "Janeiro ", value: 1},
            {label:"Fevereiro", value: 2},
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

        const lancamentos = [
            {id: 1, descricao: 'Salario', valor: 5000, mes: 1, tipo:'Receita', status:'Efetivado'}
        ]

        const tipos = [
            {label: 'Selecione...', value: ''},
            {label: 'Despesa....', value: 'DESPESA'}
        ]



        return(
            <Card title={"Consulta Lancamentos"}>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='bs-component'>

                            <FormGroup htmlFor={"inputMes"} label={"Ano: "}>
                              <input type={'date'} className={'form-control'} id={'inputAno'} placeholder={'Digite o ano'}/>
                            </FormGroup>

                            <FormGroup htmlFor={'inputMes'} label={'Mes:'}>
                                <SelectMenu className={'form-control'} lista={lista}/>
                            </FormGroup>

                            <FormGroup htmlFor={'inputTipo'} label={'Tipo lancamento'}>
                                <SelectMenu id={'inputTipo'} className={'form-control'} lista={tipos}/>
                            </FormGroup>
                            <button className='btn btn-primary' mr={3} mt={4}>
                                    Buscar
                            </button>
                            <button className='btn btn-success' mt={4}>
                                    Cadastrar
                            </button>
                        </div>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div class="col-md-12">
                        <div class="bs-component">
                            <LancamentosTable lancamentos={lancamentos} />
                        </div>
                    </div>
                </div>
            </Card>
        )
    }

}


export default withRouter(ConsultarLancamentos);
