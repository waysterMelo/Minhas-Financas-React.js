import ApiService from "../app/Apiservice";

class UsuarioService extends ApiService{

    constructor(){
        super('/usuarios');
    }
}

export default UsuarioService;