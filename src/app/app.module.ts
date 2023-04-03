import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomandaComponent } from './components/domanda/domanda.component';
import { RispostaComponent } from './components/risposta/risposta.component';
import { PunteggioComponent } from './components/punteggio/punteggio.component';

@NgModule({
  declarations: [
    AppComponent,
    DomandaComponent,
    RispostaComponent,
    PunteggioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
