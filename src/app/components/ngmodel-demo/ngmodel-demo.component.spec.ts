import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodelDemoComponent } from './ngmodel-demo.component';

describe('NgmodelDemoComponent', () => {
  let component: NgmodelDemoComponent;
  let fixture: ComponentFixture<NgmodelDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgmodelDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmodelDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
