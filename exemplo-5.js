function mostraFatorial(numero) {
    if(numero === 0){
        return 1
    }
    return numero * mostraFatorial(numero - 1)
}
console.log(mostraFatorial(7))