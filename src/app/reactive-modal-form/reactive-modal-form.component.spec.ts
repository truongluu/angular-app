import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveModalFormComponent } from './reactive-modal-form.component';

describe('ReactiveModalFormComponent', () => {
  let component: ReactiveModalFormComponent;
  let fixture: ComponentFixture<ReactiveModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveModalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
