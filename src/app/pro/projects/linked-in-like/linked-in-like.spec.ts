import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedInLike } from './linked-in-like';

describe('LinkedInLike', () => {
  let component: LinkedInLike;
  let fixture: ComponentFixture<LinkedInLike>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedInLike]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedInLike);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
