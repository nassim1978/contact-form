import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NassimContactFormModule } from 'nassim-contact-form';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NassimContactFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
