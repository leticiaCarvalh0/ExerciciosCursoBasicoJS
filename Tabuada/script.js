function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length ==0){
        window.alert('Por favor, digite um número')
    }else{
        let n = Number(num.value)
        let a = 1
        tab.innerHTML = ''
        while(a<=10){
            let item = document.createElement('option')
            item.text = `${n} X ${a} = ${n*a}`
            tab.appendChild(item)
            a++
        }
    } 
}