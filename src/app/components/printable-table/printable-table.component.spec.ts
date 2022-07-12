import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintableTableComponent } from './printable-table.component';

describe('PrintableTableComponent', () => {
  let component: PrintableTableComponent;
  let fixture: ComponentFixture<PrintableTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintableTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
