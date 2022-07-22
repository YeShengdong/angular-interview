import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiCheckComponent } from './components/multi-check.component';
import { ColumnWidthDirective } from './shared/directives/ColumnWidth/column-width.directive';

@NgModule({
  declarations: [
    AppComponent,
    MultiCheckComponent,
    ColumnWidthDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
