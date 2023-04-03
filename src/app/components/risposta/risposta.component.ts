import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Risposta } from 'src/app/interfaces/risposta';

@Component({
  selector: 'app-risposta',
  templateUrl: './risposta.component.html',
  styleUrls: ['./risposta.component.css']
})
export class RispostaComponent {
  
  @Input() risposta!:Risposta
  @Output() rispAccesa: EventEmitter<boolean> = new EventEmitter()  
  lampeggiante:boolean = false // se il bottone deve lampeggiare o no

  constructor() { }
  
  corretto() {
    this.lampeggiante = true // faccio lampeggia il bottone
    setTimeout(() => { // ritardo esecuzione codice
      this.lampeggiante = false
      this.rispAccesa.emit(this.risposta.corretto)
    }, 3000);
  }

}
