import { Component, Input, OnInit } from '@angular/core';
import { Domanda } from 'src/app/interfaces/domanda';
import { Risposta } from 'src/app/interfaces/risposta';

@Component({
  selector: 'app-aiuto5050',
  templateUrl: './aiuto5050.component.html',
  styleUrls: ['./aiuto5050.component.css']
})
export class Aiuto5050Component implements OnInit {

  @Input() domanda!:Domanda //passo la domanda

  constructor() { }

  ngOnInit(): void {
    

  }

}
