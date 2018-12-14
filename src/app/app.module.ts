import { PropertyBindingDemoComponent } from './components/databind-demo.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NowComponent } from './components/now-component/now.component';
import { ClickDemoComponent } from './components/click-demo/click-demo.component';
import { InputColouredComponent } from './components/input-coloured/input-coloured.component';
import { WarningComponent } from './components/warning/warning.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { InputColoured2Component } from './components/demo/input-coloured2/input-coloured2.component';
import { NgmodelDemoComponent } from './components/ngmodel-demo/ngmodel-demo.component';
import { CounterComponent } from './components/counter/counter.component';
import { MessagingComponent } from './components/messaging/messaging.component';
import { Rxjs1Component } from './components/demo/rxjs1/rxjs1.component';
import { Rxjs2AsyncComponent } from './components/demo/rxjs2-async/rxjs2-async.component';
import { Rxjs3HttpComponent } from './components/demo/rxjs3-http/rxjs3-http.component';
import { Layout1Component } from './components/layout1/layout1.component';
import { Forms1Component } from './components/demo/forms1/forms1.component';
import { Forms2Component } from './components/demo/forms2/forms2.component';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './components/tabs/tabs.component';

import { routes } from './app.routes';

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
    Rxjs3HttpComponent,
    Layout1Component,
    Forms1Component,
    Forms2Component,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
