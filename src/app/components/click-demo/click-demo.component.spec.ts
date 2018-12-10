import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickDemoComponent } from './click-demo.component';

describe('ClickDemoComponent', () => {
  let component: ClickDemoComponent;
  let fixture: ComponentFixture<ClickDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
