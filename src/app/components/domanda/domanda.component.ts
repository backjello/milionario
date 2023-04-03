import { Component, Input, OnInit } from '@angular/core';
import { Domanda } from 'src/app/interfaces/domanda';

@Component({
  selector: 'app-domanda',
  templateUrl: './domanda.component.html',
  styleUrls: ['./domanda.component.css']
})
export class DomandaComponent {

  @Input() domanda!:Domanda

  constructor() { }

}
