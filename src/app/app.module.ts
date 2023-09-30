import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DatosEntradaComponent } from './components/datos-entrada/datos-entrada.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DatosEntradaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
