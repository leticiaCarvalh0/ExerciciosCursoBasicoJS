let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let result = document.querySelector('div#result')
let values = []

function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}

function inlista(n, l){
    if(l.indexOf(Number(n)) !=-1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inlista(num.value, values)){
        values.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        result.innerHTML =''
    }else{
        window.alert('Valor inválido ou já encontrado')
    }
    num.value = '';
    num.focus()
}

function finalizar(){
    if(values.length ==0){
        window.alert('Adicione valores')
    }else{
        let total =  values.length
        let maior = values[0]
        let menor = values[0]
        let soma = 0
        let media = 0
        for(let pos in values){
            soma += values[pos]
            if(values[pos] > maior)
                maior = values[pos]
            if(values[pos] < menor)
                menor = values[pos]
        }
        media = soma/total
        result.innerHTML = ''
        result.innerHTML+= `<p>Ao todo temos ${total} números cadastrados.`
        result.innerHTML += `<p>O maior valor é: ${maior}</p>`
        result.innerHTML += `<p>O menor valor é: ${menor}</p>`
        result.innerHTML += `<p>A soma de todos os valores é: ${soma}</p>`
        result.innerHTML += `<p>A média dos valores é: ${media}</p>`
    }
}