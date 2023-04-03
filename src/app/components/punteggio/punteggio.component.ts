import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-punteggio',
  templateUrl: './punteggio.component.html',
  styleUrls: ['./punteggio.component.css']
})
export class PunteggioComponent {

  @Input()punteggio:number = 0

  premi:number[] = [50,100,200,300,500,1000,2000,4000,8000,16000,35000,70000,150000,300000,1000000]

  constructor() { 
    this.premi.reverse() // inverte l'array (pigrizia oer non riscirverlo)
  }

}
