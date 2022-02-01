const icons = '<i class="fas fa-pen"></i>'
var arrField = []
var arrData = []
var arrVal = []
var date = document.getElementById('date')
var val = document.getElementById('val')
var radio = document.querySelectorAll('.radio')
var feetChart = document.querySelector('#feetChart')
arrField = localStorage.getItem('x')
arrData = localStorage.getItem('y')
arrVal = localStorage.getItem('val')

if (localStorage.x == undefined){
    //adicionando os primeiros valores em localStorage
    let saldo_inicial = prompt("Informe o saldo inicial:")
    arrField = ['Inicial']
    arrData = [saldo_inicial]
    localStorage.setItem('x',arrField)
    localStorage.setItem('y',arrData)
}else{
    arrField = localStorage.x.split(',')
    arrData = localStorage.y.split(',')
}
if (localStorage.val != undefined) {
    arrVal = localStorage.val.split(',')
    for (let i = 1; i < arrVal.length; i++) {
        //adicionando os valores de localStorage.val em uma div filha
        let divFactory = document.createElement('div')
        let pFactory = document.createElement('p')
        let content = document.createTextNode(arrVal[i])
        divFactory.classList.add('feet_child')
        pFactory.appendChild(content)
        divFactory.appendChild(pFactory)
        feetChart.appendChild(divFactory)
    }//i = 1 para não pegar o primeiro valor de localStorage.val que é null
}else{
    localStorage.setItem('val',arrVal)
}

const setChart = (x,y)=>{
    //adicionando o valor do eixo x
    let calc
    arrField = localStorage.x.split(',')
    arrField.push(x)
    localStorage.x = arrField

    if (radio[0].checked) {
        //calculando a variação positiva (take) do saldo
        arrData = localStorage.y.split(',')
        calc = parseFloat(arrData[arrData.length - 1]) + parseFloat(y)
        arrData.push(calc)
        localStorage.y = arrData

        //adicionando somente o valor de take abaixo do grafico
        arrVal = localStorage.val.split(',')
        arrVal.push(`+${y}`)
        localStorage.val = arrVal
    }else{
        //calculando a variação negativa (loss) do saldo
        arrData = localStorage.y.split(',')
        calc = parseFloat(arrData[arrData.length - 1]) - parseFloat(y)
        arrData.push(calc)
        localStorage.y = arrData

        //adicionando somente o valor de loss abaixo do grafico
        arrVal = localStorage.val.split(',')
        arrVal.push(`-${y}`)
        localStorage.val = arrVal
    }
}

document.querySelector('#send').addEventListener('click',()=>{
    if (date.value != null && val.value != null) {       
        setChart(date.value,val.value)
    }else{
        alert('Erro: Passe todos os valores do formulário')
    }
})

const getLabels = ()=>{
    return arrField
}
const getData = ()=>{
    return arrData
}
export {getLabels,getData}