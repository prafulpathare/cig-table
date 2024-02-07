import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CigTableComponent } from './cig-table.component';

describe('CigTableComponent', () => {
  let component: CigTableComponent;
  let fixture: ComponentFixture<CigTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CigTableComponent]
    });
    fixture = TestBed.createComponent(CigTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
