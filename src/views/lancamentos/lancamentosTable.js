import React from "react";

export default props => {


    const rows = props.lancamentos.map(Lancamento => {
        return (
            <tr key={Lancamento.id}>
                <td>{Lancamento.descricao}</td>
                <td>{Lancamento.valor}</td>
                <td>{Lancamento.tipo}</td>
                <td>{Lancamento.mes}</td>
                <td>{Lancamento.status}</td>
            </tr>
        )
    })


    return (
        <table className="table table-hover">
        <thead>
            <tr>
                <th scope="col">Descrição</th>
                <th scope="col">Valor</th>
                <th scope="col">Tipo</th>
                <th scope="col">Mes</th>
                <th scope="col">Situação</th> 
            </tr>
        </thead>
        <tbody>
                {rows}
        </tbody>
        </table>
    )
}