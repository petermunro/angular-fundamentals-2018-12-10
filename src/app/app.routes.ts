import { Routes } from '@angular/router';

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

export const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent },
  { path: 'input2', component: InputColoured2Component },
  { path: 'ngmodel', component: NgmodelDemoComponent },
  { path: 'message', component: MessagingComponent },
  { path: 'rxjs1', component: Rxjs1Component },
  { path: 'rxjs2', component: Rxjs2AsyncComponent },
  { path: 'rxjs3', component: Rxjs3HttpComponent },
  { path: 'layout', component: Layout1Component },
  { path: 'forms1', component: Forms1Component },
  { path: 'forms2', component: Forms2Component },
  { path: 'count', component: CounterComponent }
];
