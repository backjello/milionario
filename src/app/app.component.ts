import { Component, OnInit } from '@angular/core';
import { DOMANDE } from './domande'
import { Domanda } from './interfaces/domanda';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  livello:number = 0 // il livello della domanda corrente
  domanda!:Domanda // la domanda che sto mostrando al momento 
  
  rispostaAccesa(corretta: boolean) {
    if(!corretta){
      console.log('hai perso !')
    }
    else{
      this.livello++ // vado avanti di livello
      this.prendiDomanda() // prendo una nuova domanda
    }
  }
  
  ngOnInit(): void {
    this.prendiDomanda()
  }
  
  prendiDomanda(){ //prende una domanda a caso per il LV corrente
    const DOMANDE_LV:Domanda[] = DOMANDE[this.livello] // prendo tutte le domande per il lv corrente
    const N_DOMANDE:number = DOMANDE_LV.length // numero delle domande disponibili per quel livello
    const N_CASUALE:number = Math.floor(Math.random() * N_DOMANDE)  // 0.45 = 0 -> 0 ; 1.1 -> 1
    this.domanda = DOMANDE_LV[N_CASUALE] // prendo la domanda di posizione N_CASUALE
    console.log(this.domanda)
  }

}
