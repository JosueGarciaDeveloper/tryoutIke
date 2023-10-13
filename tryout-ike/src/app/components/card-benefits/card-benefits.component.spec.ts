import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBenefitsComponent } from './card-benefits.component';

describe('CardBenefitsComponent', () => {
  let component: CardBenefitsComponent;
  let fixture: ComponentFixture<CardBenefitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBenefitsComponent]
    });
    fixture = TestBed.createComponent(CardBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
