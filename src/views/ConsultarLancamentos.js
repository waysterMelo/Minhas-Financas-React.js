import React from 'react';
import FormGroup from '../components/FormGroup';
import SelectMenu from '../components/SelectMenu';
import Card from '../components/Card';


class ConsultarLancamentos extends React.Component{
    render(){
        const lista = [
            {label: "Selecione o mes....", value: ''},
            {label: "Janeiro ", value: 1},
            {label:"Fevereiro", value: 2}
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
                        </div>
                    </div>
                </div>
            </Card>
        )
    }

}


export default ConsultarLancamentos;
