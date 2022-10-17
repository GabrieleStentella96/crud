import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreazioneImpiegatoComponent } from './creazione-impiegato/creazione-impiegato.component';
import { ModificaImpiegatoComponent } from './modifica-impiegato/modifica-impiegato.component';
import { DettagliImpiegatoComponent } from './dettagli-impiegato/dettagli-impiegato.component';
import { ListaImpiegatoComponent } from './lista-impiegato/lista-impiegato.component';

@NgModule({
  declarations: [
    AppComponent,
    CreazioneImpiegatoComponent,
    ModificaImpiegatoComponent,
    DettagliImpiegatoComponent,
    ListaImpiegatoComponent]
    ,
    
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
