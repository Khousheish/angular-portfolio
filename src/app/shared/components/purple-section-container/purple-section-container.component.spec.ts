import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurpleSectionContainerComponent } from './purple-section-container.component';

describe('PurpleSectionContainerComponent', (): void => {
  let component: PurpleSectionContainerComponent;
  let fixture: ComponentFixture<PurpleSectionContainerComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ PurpleSectionContainerComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurpleSectionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
