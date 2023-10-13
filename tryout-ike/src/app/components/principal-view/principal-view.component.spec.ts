import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalViewComponent } from './principal-view.component';

describe('PrincipalViewComponent', () => {
  let component: PrincipalViewComponent;
  let fixture: ComponentFixture<PrincipalViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalViewComponent]
    });
    fixture = TestBed.createComponent(PrincipalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
