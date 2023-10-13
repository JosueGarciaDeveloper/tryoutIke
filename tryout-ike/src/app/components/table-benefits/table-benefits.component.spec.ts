import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBenefitsComponent } from './table-benefits.component';

describe('TableBenefitsComponent', () => {
  let component: TableBenefitsComponent;
  let fixture: ComponentFixture<TableBenefitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableBenefitsComponent]
    });
    fixture = TestBed.createComponent(TableBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
