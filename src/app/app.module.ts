import { PropertyBindingDemoComponent } from "./components/databind-demo.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NowComponent } from "./components/now-component/now.component";
import { ClickDemoComponent } from './components/click-demo/click-demo.component';
import { InputColouredComponent } from './components/input-coloured/input-coloured.component';
import { WarningComponent } from './components/warning/warning.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, NowComponent, PropertyBindingDemoComponent, ClickDemoComponent, InputColouredComponent, WarningComponent],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
