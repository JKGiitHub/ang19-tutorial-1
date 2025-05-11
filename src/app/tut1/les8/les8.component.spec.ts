import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Les8Component } from './les8.component';

describe('Les8Component', () => {
  let component: Les8Component;
  let fixture: ComponentFixture<Les8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Les8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Les8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
