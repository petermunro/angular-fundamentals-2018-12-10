import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputColoured2Component } from './input-coloured2.component';

describe('InputColoured2Component', () => {
  let component: InputColoured2Component;
  let fixture: ComponentFixture<InputColoured2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputColoured2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputColoured2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
