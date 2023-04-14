import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomandaComponent } from './components/domanda/domanda.component';
import { RispostaComponent } from './components/risposta/risposta.component';
import { PunteggioComponent } from './components/punteggio/punteggio.component';
import { Aiuto5050Component } from './components/aiuto5050/aiuto5050.component';
import { Aiutopubblico2Component } from './components/aiutopubblico2/aiutopubblico2.component';
import { Aiutodacasa2Component } from './components/aiutodacasa2/aiutodacasa2.component';
import { ClassificaComponent } from './components/classifica/classifica.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog'


@NgModule({
  declarations: [
    AppComponent,
    DomandaComponent,
    RispostaComponent,
    PunteggioComponent,
    Aiuto5050Component,
    Aiutopubblico2Component,
    Aiutodacasa2Component,
    ClassificaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
