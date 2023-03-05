import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HandsTableComponent } from './hands-table/hands-table.component';
import { registerAllModules } from 'handsontable/registry';
import { HotTableModule } from '@handsontable/angular';
import { AhForDirective } from './ah-for.directive';
import { AhHighlightDirective } from './ah-highlight.directive';
import { AhColorClickDirective } from './ah-color-clic.directive';
import { RecordsComponent } from './records/records.component';
import { HoldToDeleteDirective } from './hold-to-delete.directive';

// register Handsontable's modules
registerAllModules();
@NgModule({
  declarations: [
    AppComponent,
    HandsTableComponent,
    AhForDirective,
    AhHighlightDirective,
    AhColorClickDirective,
    RecordsComponent,
    HoldToDeleteDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HotTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
