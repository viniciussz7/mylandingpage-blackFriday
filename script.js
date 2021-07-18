function salvaDados() {
     let nome = document.getElementById("nome");
     let email = document.getElementById("email");
     let dados = JSON.parse(localStorage.getItem("dadosForm"));

     if(dados == null){
         localStorage.setItem("dadosForm", "[]");
         dados = [];
     }

     let regDados = {
         nome: nome.value,
         email: email.value
     }
     dados.push(regDados);
     localStorage.setItem("dadosForm", JSON.stringify(dados));
     alert(`Obrigado, ${nome.value}! Se liga na sua caixa de entrada!`)
}
