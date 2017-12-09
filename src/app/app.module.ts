import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SoundbuttonComponent } from './soundbutton/soundbutton.component';


@NgModule({
  declarations: [
    AppComponent,
    SoundbuttonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
