import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplesSectionComponent } from './samples-section.component';

describe('SamplesSectionComponent', () => {
  let component: SamplesSectionComponent;
  let fixture: ComponentFixture<SamplesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamplesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
