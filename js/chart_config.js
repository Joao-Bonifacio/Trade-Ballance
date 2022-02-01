import {getLabels,getData} from "./script.js"

const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: getLabels(),
        //labels: ['a','b','c','d'],
        datasets: [{
            label: '# Patrimônio',
            data: getData(),
            //data: [1,3,5,7],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1.5,
            tension: 0.4
        }]
    },
    options: {
        animation:{
            duration: 1500,
            easing: 'easeDutBounce',
        },
        scales: {
            x: { 
                grid:{
                    color: 'rgba(0,0,0,0)',
                    borderColor: 'rgba(0,0,0,1)',
                    tickColor: 'rgba(0,0,0,0)'
                }
            },
            y: { 
                grid:{
                    color: 'rgba(0,0,0,0)',
                    borderColor: 'rgba(0,0,0,1)',
                    tickColor: 'rgba(0,0,0,0)'
                },
            },
        }
    }
})
//lapis <i class="fas fa-pen"></i>
//lixeira <i class="fas fa-trash"></i>