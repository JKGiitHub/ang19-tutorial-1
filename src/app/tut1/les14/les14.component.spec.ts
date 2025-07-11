import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Les14Component } from './les14.component';

describe('Les14Component', () => {
  let component: Les14Component;
  let fixture: ComponentFixture<Les14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Les14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Les14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
