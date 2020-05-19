import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerPriceIndexComponent } from './consumer-price-index.component';

describe('ConsumerPriceIndexComponent', () => {
  let component: ConsumerPriceIndexComponent;
  let fixture: ComponentFixture<ConsumerPriceIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerPriceIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerPriceIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
