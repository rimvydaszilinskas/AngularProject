import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllCartsComponent } from './display-all-carts.component';

describe('DisplayAllCartsComponent', () => {
  let component: DisplayAllCartsComponent;
  let fixture: ComponentFixture<DisplayAllCartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAllCartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
