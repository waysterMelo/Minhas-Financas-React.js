import ApiService from "../Apiservice";

export default class LancamentosServices extends  ApiService{

    constructor() {
        super('/api/lancamentos');
    }

    consultar(LancamentoFiltro){

        let params = `?ano=${LancamentoFiltro.ano}`;

        if (LancamentoFiltro.mes){
            params = `${params}&mes=${LancamentoFiltro.mes}`;
        }

        if (LancamentoFiltro.tipo){
            params = `${params}&tipo=${LancamentoFiltro.tipo}`;
        }

        if (LancamentoFiltro.status){
            params = `${params}&status=${LancamentoFiltro.status}`;
        }



    }

}