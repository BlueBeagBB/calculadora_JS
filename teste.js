function Calculadora(){
    let n1 = parseInt(prompt("Digite um número"));
    let n2 = parseInt(prompt("Digite outro número"));
    let escolha = parseInt(prompt("Escolha uma opção"));
    let resposta = document.getElementById('resposta');

    if(escolha==1){
        resposta.textContent = "A resposta é: "+(n1+n2);
    } else if(escolha==2){
        resposta.textContent = "A resposta é: "+(n1-n2);
    } else if(escolha==3){
        resposta.textContent = "A resposta é: "+(n1/n2);
    } else if(escolha==4){
        resposta.textContent = "A resposta é: "+(n1*n2);
    } else{
        resposta.textContent = "Digite uma opção válida";
    }
}
