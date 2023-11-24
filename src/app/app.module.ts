import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DinosauriosModule } from './dinosaurios/dinosaurios.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DinosauriosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
