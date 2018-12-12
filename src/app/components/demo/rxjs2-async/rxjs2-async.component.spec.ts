import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rxjs2AsyncComponent } from './rxjs2-async.component';

describe('Rxjs2AsyncComponent', () => {
  let component: Rxjs2AsyncComponent;
  let fixture: ComponentFixture<Rxjs2AsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rxjs2AsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rxjs2AsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
