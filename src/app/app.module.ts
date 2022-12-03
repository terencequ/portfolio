import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KatanaModule } from '@terencequ/katana';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        KatanaModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
