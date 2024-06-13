import ApiService from "../Apiservice";

class UsuarioService extends ApiService{

    constructor(){
        super('/usuarios');
    }

    autenticar(credenciais){
        return this.post('/autenticar', credenciais)
    }

    oberSaldoPorUsuario(id){
        return this.get(`/${id}/saldo`)
    }

    salvar(usuario){
        return this.post('/', usuario)
    }


}

export default UsuarioService;