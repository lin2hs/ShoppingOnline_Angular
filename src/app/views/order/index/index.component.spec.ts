import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderIndexComponent } from './index.component';

describe('OrderIndexComponent', () => {
  let component: OrderIndexComponent;
  let fixture: ComponentFixture<OrderIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
