function validarCpf(cpf){
    if (cpf.length !== 11) {
      return {valido:false, texto:"CPF deve ter 11 digitos."}
    }else{
      return {valido:true, texto:""};
    }
  }

  function validarSenha(senha){
    if (senha.length < 4 || senha.length > 72) {
      return {valido:false, texto:"Senha deve ter 4 a 72 dígitos."}
    }else{
      return {valido:true, texto:""};
    }
  }

  function validarCep(cep) {
    var pattern = new RegExp('^[0-9]{5}-?[0-9]{3}$');
    if (!pattern.test(cep)) {
      return ({valido: false, texto: "O valor digitado não é um CEP."});
    }
    else {
      return ({valido: true, texto: ""});
    }
  }

  export { validarCpf, validarSenha, validarCep}

  //06631-030