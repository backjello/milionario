import { Component, OnInit } from '@angular/core';
import { DOMANDE } from './domande'
import { Domanda } from './interfaces/domanda';
import { Risposta } from './interfaces/risposta';
import { MatDialog } from '@angular/material/dialog';
import { ClassificaComponent } from './components/classifica/classifica.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  livello:number = 0 // il livello della domanda corrente
  domanda!:Domanda // la domanda che sto mostrando al momento 
  giausato5050 : boolean = false
  mostraPubblico: boolean = false;
  mostraCasa: boolean = false

  constructor(private dialog:MatDialog){}

  aiutoCasa() {
    this.mostraCasa = true
  }
  aiutoPubblico() {
    this.mostraPubblico = true
  }

  aiuto5050(){
    this.giausato5050 = true
    const risposte:Risposta[] = this.domanda.risposte // salvo le risposte in una constante
    var domandeEliminate = 0 // so quante domande ho eliminato, quando arrivo a 2 mi fermo
    // solulzione semplice (la quarta risposta non viene mai eliminata però)
    // for (let i = 0; i < risposte.length; i++) { 
    //   if( !risposte[i].corretto ){ //se la risposta NON è corretta
    //     risposte[i].testo = "" //tolgo il testo dalla risposta
    //     domandeEliminate ++; // aumento il numero delle domande eliminate
    //   }
    //   if( domandeEliminate == 2){ // se ho eliminato due domande
    //     break; // fermo il ciclo
    //   }
    // }
    do{
      const N_CASUALE = Math.floor(Math.random() * 4) //numero a caso fra 0 e 3
      const risposta = risposte[N_CASUALE] // prendo la risposta data dal numero casuale
      if( !risposta.corretto && risposta.testo!='' ){ // se la risposta non è corretta e non ho già eliminato la rispsota
        risposta.testo = '' 
        domandeEliminate++
      }
    }while(domandeEliminate < 2); // continuo finchè non ho eliminato due domande

  }


  rispostaAccesa(corretta: boolean) {
    if(!corretta){
      this.dialog.open(ClassificaComponent,{
        data:{
          
        },
        width:'80%'
      })
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
