import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AgGridModule } from "ag-grid-angular";

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, AgGridModule],
  declarations: [AppComponent],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
