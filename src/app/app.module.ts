import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CigTableComponent } from './components/cig-table/cig-table.component';
import { RowComponent } from './components/cig-table/row/row.component';

@NgModule({
  declarations: [
    AppComponent,
    CigTableComponent,
    RowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
