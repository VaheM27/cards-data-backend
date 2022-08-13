import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardsComponent } from 'src/components/cards/cards.component';
import { TableComponent } from 'src/components/table/table.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, CardsComponent, TableComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
