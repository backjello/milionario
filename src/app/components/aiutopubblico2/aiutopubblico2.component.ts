import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Domanda } from 'src/app/interfaces/domanda';

@Component({
  selector: 'app-aiutopubblico2',
  templateUrl: './aiutopubblico2.component.html',
  styleUrls: ['./aiutopubblico2.component.css']
})
export class Aiutopubblico2Component implements OnInit {

  @Input() domanda!:Domanda
  @Input() lv!:number //livello al quale mi trovo
  percentuali:number[] = [] // mi salvo le percentuali delle domande
  grafico!:Chart
  datiGrafico!:any
 
  constructor() { 
    
  }

  ngOnInit(): void {
    const risposte = this.domanda.risposte // copio le risposte
    const moltiplicatore = ( 14 - this.lv )/ 15 // probabilità che la risposta venga data correttamente dal pubblico
    var percentualeGiusta = Math.floor(moltiplicatore * 100) // assegno la percentuale alla domanda giust0a
    if(percentualeGiusta <  20 ) // non mando la probabilità sotto lo zero
      percentualeGiusta = percentualeGiusta + 15
    percentualeGiusta = percentualeGiusta - Math.floor( Math.random() * 15 )
    var percentualeRimanente = 100 - percentualeGiusta //percentuale da distribuire alle domande sbagliate

    //assegno alle risposte sbagliate un valore a caso
    var percentuale1Risposta = Math.floor( percentualeRimanente / (Math.random() * 5 + 1) )
    percentualeRimanente = percentualeRimanente - percentuale1Risposta

    var percentuale2Risposta = Math.floor( percentualeRimanente / (Math.random() * 3 + 1) )
    percentualeRimanente = percentualeRimanente - percentuale2Risposta

    var percentuale3Risposta = percentualeRimanente

    var indiceCorretto = 0 // indice della risposta corretta 
    for (let i = 0; i < risposte.length; i++) {
      if(risposte[i].corretto){
        indiceCorretto = i
      }
    }

    this.percentuali = [percentuale1Risposta,percentuale2Risposta,percentuale3Risposta] // metto nell'array le 3 risposte sbagliate

    this.percentuali.splice(indiceCorretto,0,percentualeGiusta)
    console.log(this.percentuali);
    
    // per test per generare gli altri 15lv
    // this.lv++
    // this.percentuali=[]
    // if(this.lv < 15){
    //   this.ngOnInit()
    // }

    this.datiGrafico = {
      labels:["A","B","C","D"],
      datasets:[
        {
          data:this.percentuali,
          backgroundColor:["rgb(255,165,0)"]
        }
      ]
    }

    this.grafico = new Chart("areaGrafico",{
      type:'bar',
      data:this.datiGrafico,
      options:{
        plugins:{
          legend:{
            display:false
          }
        },
        scales:{
          y:{
            display:false
          },
          // x:{
          //   display:false
          // }
        }
      }
    })

  }

}
