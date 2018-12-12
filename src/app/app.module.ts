import { PropertyBindingDemoComponent } from './components/databind-demo.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NowComponent } from './components/now-component/now.component';
import { ClickDemoComponent } from './components/click-demo/click-demo.component';
import { InputColouredComponent } from './components/input-coloured/input-coloured.component';
import { WarningComponent } from './components/warning/warning.component';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { InputColoured2Component } from './components/demo/input-coloured2/input-coloured2.component';
import { NgmodelDemoComponent } from './components/ngmodel-demo/ngmodel-demo.component';
import { CounterComponent } from './components/counter/counter.component';
import { MessagingComponent } from './components/messaging/messaging.component';
import { Rxjs1Component } from './components/demo/rxjs1/rxjs1.component';
import { Rxjs2AsyncComponent } from './components/demo/rxjs2-async/rxjs2-async.component';
import { Rxjs3HttpComponent } from './components/demo/rxjs3-http/rxjs3-http.component';

@NgModule({
  declarations: [
    AppComponent,
    NowComponent,
    PropertyBindingDemoComponent,
    ClickDemoComponent,
    InputColouredComponent,
    WarningComponent,
    ContactListComponent,
    InputColoured2Component,
    NgmodelDemoComponent,
    CounterComponent,
    MessagingComponent,
    Rxjs1Component,
    Rxjs2AsyncComponent,
    Rxjs3HttpComponent
  ],
  imports: [BrowserModule, CommonModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
