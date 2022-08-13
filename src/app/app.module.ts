import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [AppComponent, CardsComponent, TableComponent, EditModalComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
