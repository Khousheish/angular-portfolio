import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurpleSectionComponent } from './purple-section.component';

describe('PurpleSectionComponent', () => {
  let component: PurpleSectionComponent;
  let fixture: ComponentFixture<PurpleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurpleSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurpleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
