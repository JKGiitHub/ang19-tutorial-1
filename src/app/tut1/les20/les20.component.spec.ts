import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Les20Component } from './les20.component';

describe('Les20Component', () => {
  let component: Les20Component;
  let fixture: ComponentFixture<Les20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Les20Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Les20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
