import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Les18Component } from './les18.component';

describe('Les18Component', () => {
  let component: Les18Component;
  let fixture: ComponentFixture<Les18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Les18Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Les18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
