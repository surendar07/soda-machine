import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertcoinComponent } from './insertcoin.component';

describe('InsertcoinComponent', () => {
  let component: InsertcoinComponent;
  let fixture: ComponentFixture<InsertcoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertcoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
