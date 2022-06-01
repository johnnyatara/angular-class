import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutcAlertsComponent } from './produtc-alerts.component';

describe('ProdutcAlertsComponent', () => {
  let component: ProdutcAlertsComponent;
  let fixture: ComponentFixture<ProdutcAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutcAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutcAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
