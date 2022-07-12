import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPrintModule } from 'ngx-print';
import { AppComponent } from './app.component';
import { PrintableTableComponent } from './components/printable-table/printable-table.component';
import { TestNgPrintComponent } from './components/test-ng-print/test-ng-print.component';

@NgModule({
  declarations: [
    AppComponent,
    PrintableTableComponent,
    TestNgPrintComponent
  ],
  imports: [
    BrowserModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
