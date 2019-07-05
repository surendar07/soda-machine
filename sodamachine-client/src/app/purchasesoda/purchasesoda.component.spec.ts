import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesodaComponent } from './purchasesoda.component';

describe('PurchasesodaComponent', () => {
  let component: PurchasesodaComponent;
  let fixture: ComponentFixture<PurchasesodaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasesodaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
