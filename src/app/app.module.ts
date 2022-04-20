import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TreeModule} from 'angular-tree-component';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, TreeModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
