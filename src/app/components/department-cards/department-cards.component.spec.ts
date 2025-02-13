import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentCardsComponent } from './department-cards.component';

describe('DepartmentCardsComponent', () => {
  let component: DepartmentCardsComponent;
  let fixture: ComponentFixture<DepartmentCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
