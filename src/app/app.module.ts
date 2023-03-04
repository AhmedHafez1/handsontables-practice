import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HandsTableComponent } from './hands-table/hands-table.component';
import { registerAllModules } from 'handsontable/registry';
import { HotTableModule } from '@handsontable/angular';
import { AhForDirective } from './ah-for.directive';

// register Handsontable's modules
registerAllModules();
@NgModule({
  declarations: [AppComponent, HandsTableComponent, AhForDirective],
  imports: [BrowserModule, AppRoutingModule, HotTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
