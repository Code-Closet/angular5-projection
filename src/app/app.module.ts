import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel.component';
import { AccordionComponent } from './accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
