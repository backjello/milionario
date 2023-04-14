import { Component, Input, OnInit } from '@angular/core';
import { Domanda } from 'src/app/interfaces/domanda';

@Component({
  selector: 'app-aiutodacasa2',
  templateUrl: './aiutodacasa2.component.html',
  styleUrls: ['./aiutodacasa2.component.css']
})
export class Aiutodacasa2Component implements OnInit {

  @Input() domanda!:Domanda
  @Input() lv!:number
  lettere = ['A','B','C','D']
  letteraScelta = ''
  nomi:string[] = ['Mario','Luigi','Francesco']
  nomeScelto = ''

  ngOnInit(): void {
    const moltiplicatore = (14 - this.lv)/15 //più alto è il livello maggiore è la difficoltà
    var rispostaGiusta = moltiplicatore * 100
    const risposte = this.domanda.risposte
    if(rispostaGiusta > 50){ //diamo la risposta giusta
      for (let i = 0; i < risposte.length; i++) { //cerco la risposta giusta
        if(risposte[i].corretto){
          this.letteraScelta = this.lettere[i] // imposta la lettera uguale a quella della domanda corretta
        }
      }
    }
    else{ //risposta non corretta
      const N_CASUALE = Math.random() * 4
      this.letteraScelta = this.lettere[N_CASUALE]
    }
    //prendo un nome a caso
    const NOME_CASUALE = Math.floor(Math.random() * this.nomi.length)    
    this.nomeScelto = this.nomi[NOME_CASUALE]
  }

}
