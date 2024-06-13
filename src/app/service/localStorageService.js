
<<<<<<< HEAD
export default class LocalStorage{
=======
export default class LocalStorageService{
>>>>>>> 0d534c1673e9c2e3e0f07bf014cd72233491c7c7
    

    static adicionarItem(chave, valor){
            localStorage.setItem(chave, JSON.stringify(valor))
    }

    static obterItem(chave){
      const item = localStorage.getItem(chave)
      return JSON.parse(item);
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 0d534c1673e9c2e3e0f07bf014cd72233491c7c7
