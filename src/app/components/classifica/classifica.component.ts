import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

const KEY_CLASSIFICA = "classifica"

@Component({
  selector: 'app-classifica',
  templateUrl: './classifica.component.html',
  styleUrls: ['./classifica.component.css']
})
export class ClassificaComponent implements OnInit {

  classifica: { nome: string, punteggio: number }[] = []
  // [{punteggio:300000},{punteggio:50}]

  constructor(@Inject(MAT_DIALOG_DATA) data:any, ) {
    var temp = localStorage.getItem(KEY_CLASSIFICA)
    if(temp != null){
      this.classifica = JSON.parse(temp) // "{"nome":"mario"}" -> {nome:'mario'} // la prima è una stringa la seconda è un oggetto
    }
    this.classifica=[
      {nome:'b',punteggio:50},
      {nome:'a',punteggio:10000000},
      {nome:'c',punteggio:5000},
    ]
    data.punteggio = 30000
    this.classifica.push({
      nome:'NOME',
      punteggio:data.punteggio
    })
    this.classifica.sort((a,b)=> { return b.punteggio - a.punteggio } )
    console.log(this.classifica);
  }

  ngOnInit(): void {
  }

}
