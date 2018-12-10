import { Component } from "@angular/core";

@Component({
  selector: "app-property-binding-demo",
  template: `
    <p textContent="initializing?">A paragraph</p>
    <p [textContent]="initializing">A paragraph</p>
    <p [textContent]="'initializing'">A paragraph</p>
    <p bind-textContent="'initializing'">A paragraph</p>
    <p textContent="{{initializing}}">A paragraph</p>
  `
})
export class PropertyBindingDemoComponent {
  initializing: string = "component instance property";
}
