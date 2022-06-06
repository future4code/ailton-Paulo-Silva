```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido){
let count = 0

for(let i = 0; i < arrayDeNumeros.length; i++){
  if(arrayDeNumeros[i] === numeroEscolhido){
    count +=1
  }
}

if (count > 0){
  return `O número ${numeroEscolhido} aparece ${count}x`
} else {
  return `Número não encontrado`
}
}
```
