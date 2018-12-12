import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rxjs3HttpComponent } from './rxjs3-http.component';

describe('Rxjs3HttpComponent', () => {
  let component: Rxjs3HttpComponent;
  let fixture: ComponentFixture<Rxjs3HttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rxjs3HttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rxjs3HttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
