import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InsertcoinComponent } from './insertcoin/insertcoin.component';
import { PurchasesodaComponent } from './purchasesoda/purchasesoda.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertcoinComponent,
    PurchasesodaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
