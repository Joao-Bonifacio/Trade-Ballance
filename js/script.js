var arrField = []
var arrData = []
var arrVal = []
var date = document.getElementById('date')
var val = document.getElementById('val')
var radio = document.querySelectorAll('.radio')
var feetChart = document.querySelector('#feetChart')
var arrow = document.getElementById('arrow')
arrField = localStorage.getItem('x')
arrData = localStorage.getItem('y')
arrVal = localStorage.getItem('val')
/*to do

função{
//console.log(feetChart.childNodes.length)
//aplicar eventListner em cada icone dos child
//pegar os childNodes do feetChart e editar/excluir de acordo com o eventListner aplicado em cada icone
//excluir do localStorage
}

*/
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
if (localStorage.val == undefined) {
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
        arrVal = localStorage.val
        arrVal = arrVal.split(',')
        arrVal.push(`+${y}`)
        localStorage.val = arrVal
    }else{
        //calculando a variação negativa (loss) do saldo
        arrData = localStorage.y.split(',')
        calc = parseFloat(arrData[arrData.length - 1]) - parseFloat(y)
        arrData.push(calc)
        localStorage.y = arrData

        //adicionando somente o valor de loss abaixo do grafico
        arrVal = localStorage.val
        arrVal = arrVal.split(',')
        arrVal.push(`-${y}`)
        localStorage.val = arrVal
    }
}

const setFeetChart = (t)=>{
    //adicionar os valores ao clicar na seta para baixo
    if (t == 'down') {
        if (localStorage.val != undefined) {
            arrVal = localStorage.val.split(',')
            for (let i = 1; i < arrVal.length; i++) {
                //adicionando os valores de localStorage.val em uma div filha
                let divFactory = document.createElement('div')
                let pFactory = document.createElement('p')
                let content = document.createTextNode(arrVal[i])
                let spanFactory = document.createElement('span')
                let p2 = document.createElement('p')
                let iFactoryPen = document.createElement('i')
                let iFactoryTrash = document.createElement('i') 
        
                iFactoryPen.setAttribute('class','fas fa-pen clk')
                iFactoryTrash.setAttribute('class','fas fa-trash clk')
                spanFactory.appendChild(iFactoryPen)
                spanFactory.appendChild(iFactoryTrash)
                p2.appendChild(spanFactory)
                divFactory.classList.add('feet_child')
                pFactory.appendChild(content)
                divFactory.appendChild(pFactory)
                divFactory.appendChild(p2)
                feetChart.appendChild(divFactory)
            }//i = 1 para não pegar o primeiro valor de localStorage.val que é null


            //setando os edits/remove do feetChart
            for (let i = 0; i < feetChart.childNodes.length; i++) {
                feetChart.childNodes[i].childNodes[1].childNodes[0].childNodes[0].addEventListener('click',()=>{
                    arrData = localStorage.y.split(',')
                    arrVal = localStorage.val.split(',')
                    let n_val = parseFloat(prompt('informe o novo valor'))
                    let n_tkls = parseFloat(prompt('foi take(positivo) ou loss(negativo)'))
                    //trocar valor de arrField,arrData,arrVal na posição i
                    arrData[i] = n_val
                    if (n_tkls == 'take') {
                        arrVal[i + 1] = `+${n_val}`
                    }else{
                        arrVal[i + 1] = `-${nval}`
                    }

                    //editar o filho coreespondente
                    //terminar amanhã

                    //update no localStorage
                    localStorage.y = arrData
                    localStorage.val = arrVal
                })
                feetChart.childNodes[i].childNodes[1].childNodes[0].childNodes[1].addEventListener('click',()=>{
                    arrField = localStorage.x.split(',')
                    arrData = localStorage.y.split(',')
                    arrVal = localStorage.val.split(',')
                    //remover valor de arrField,arrData,arrVal na posição i
                    arrField.splice(i,1)
                    arrData.splice(i,1)
                    arrVal.splice(i,1)

                    //remover o filho correspondente
                    feetChart.childNodes[i].innerHTML = ""

                    //update no localStorage
                    localStorage.x = arrField
                    localStorage.y = arrData
                    localStorage.val = arrVal
                })
            }
            //----------


        }else{
            localStorage.setItem('val',arrVal)
        }
    }else if (t == 'up') {
        feetChart.innerHTML = ""
    }
}

document.querySelector('#send').addEventListener('click',()=>{
    if (date.value != null && val.value != null) {       
        setChart(date.value,val.value)
    }else{
        alert('Erro: Passe todos os valores do formulário')
    }
})

arrow.addEventListener('click',()=>{
    if (arrow.classList.contains('fa-arrow-down')) {
        setFeetChart('down')
        arrow.removeAttribute('class')
        arrow.setAttribute('class','fas fa-arrow-up')
        arrow.parentElement.parentElement.setAttribute('title','mostrar menos')
    }else{
        setFeetChart('up')
        arrow.removeAttribute('class')
        arrow.setAttribute('class','fas fa-arrow-down')
        arrow.parentElement.parentElement.setAttribute('title','mostrar mais')
    }
})

const getLabels = ()=>{
    return arrField
}
const getData = ()=>{
    return arrData
}
export {getLabels,getData}