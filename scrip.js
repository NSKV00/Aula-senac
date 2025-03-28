console.log(alert("texte"));

//For atividade 1
//let palavra = prompt(`Digite uma palavra`)
//let palavrainvertida = ""
//if (palavra){
    //for (let i = palavra.length -1; i >= 0; i--){
        //palavrainvertida += palavra[i]
    //}
    //console.log(`A palavra invertida é: ${palavrainvertida}`)
//}else{
    //alert(`Nenhuma palavra foi inserida`)
//}

//For atividade 2
//let texto = prompt(`Digite uma palavra/texto`)
//let resultado = ""

//for (let i =0; i<texto.length;i++){
    //if(i % 2 ==0){
        //resultado += texto[i].toUpperCase()
    //}else{
        //resultado += texto[i].toLowerCase()
    //}
//}
//console.log(resultado)

//For atividade 3
//let lista = [1,2,3,4,5,6,7,8,9,15]
//let resultado = []

//for(let i=0; i<lista.length; i++){
    //if(lista[i] % 3 ==0 && lista[i] % 5==0){
        //resultado.push(`boom`)
    //}else if(lista[i] % 3 == 0){
        //resultado.push("plic")
    //}else if(lista[i] % 5 ==0){
        //resultado.push("plac")
    //}else {
        //resultado.push(lista[i])
    //}
//}  
//console.log(resultado)


    //Atividade 1 - DESENVOLVA UM ALGORITMO QUE SIMULE UM EMPRÉSTIMO
      //- O USUÁRIO DEVE INSERIR O VALOR DESEJADO DE EMPRÉSTIMO
      //- O NÚMERO DE PARCELAS
      //- OS JUROS EM CADA PARCELA

    //- NO FINAL VOCÊ DEVE EXIBIR:
      //- VALOR FINAL DO EMPRÉSTIMO COM OS JUROS
      //- VALOR DE CADA PARCELA COM OS JUROS
      //- NÚMERO DE PARCELAS
console.log(`Atividade 1`)

let emprestimo = parseFloat(prompt(`Insira o valor desejado:`));{
    if (isNaN(emprestimo)){
        alert(`Erro`)
    }
}
let parcelas = parseFloat(prompt(`Insira o numero de parcelas:`));{
    if (isNaN(parcelas)){ 
        alert(`Erro`)
    }
}
const juros = 5/100

const montante = emprestimo * Math.pow(1+ juros,parcelas)

console.log(`Valor do empréstimo: ${emprestimo}`)
console.log(`Quantidade de parcelas: ${parcelas}`)
console.log(`Taxa de juros: 5% ao mês`)
const resultado = (`${emprestimo}` *`${1+juros}` ^`${parcelas}`)
console.log(`Valor final do empréstimo: ${montante.toFixed(2)}`)
console.log(`Valor da parcela: ${(montante / parcelas).toFixed(2)}`)
      
      //Atividade 2 - DESENVOLVA UM ALGORIMTO QUE RECEBE UMA PALAVRA DIGITADA PELO USUÁRIO
        //- VOCÊ DEVE EXIBIR AO FINAL:
          //- TAMANHO DA PALAVRA
          //- NÚMERO DE VOGAIS
          //- PALAVRA INVERTIDA
console.log(`Atividade 2`);

let palavra = prompt(`Digite sua palavra:`)
    console.log(palavra)
let contvogais = 0
for (let i=0; i < palavra.length; i++){
    console.log(palavra[i],i)

if(palavra[i].toLowerCase()==="a" || palavra[i].toLowerCase()==="e" || palavra[i].toLowerCase()==="i" || palavra[i].toLowerCase()==="o" || palavra[i].toLowerCase()==="u"){
    contvogais++
}
}
console.log(`Sua palavra possuí este numero de vogais: ${contvogais}`)

let palavrainvertida = ""
if (palavra){
    for (let i = palavra.length -1; i >= 0; i--){
        palavrainvertida += palavra[i]
    }
    console.log(`A palavra invertida é: ${palavrainvertida}`)
}else{
    alert(`Nenhuma palavra foi inserida`)
}
    
    
          //Atividade 3 - DESENVOLVA UM ALGORITMO QUE RECEBA DO USUÁRIO
        //- UMA LISTA DE NÚMEROS
        //- UM NÚMERO, PARA SER USADO COMO MULTIPLICADOR
          //- VOCÊ DEVE EXIBIR AO FINAL
            //- A SOMA DE TODOS OS NÚMEROS
            //- UMA LISTA DOS NÚMEROS QUE SÃO DIVISÍVEIS PELO MULPLICADOR INFORMADO.
console.log(`Atividade 3`);

