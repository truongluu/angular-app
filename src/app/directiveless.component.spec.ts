import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivelessComponent } from './directiveless.component';

describe('DirectivelessComponent', () => {
  let component: DirectivelessComponent;
  let fixture: ComponentFixture<DirectivelessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivelessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivelessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
