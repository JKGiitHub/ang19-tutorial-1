import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Les19Component } from './les19.component';

describe('Les19Component', () => {
  let component: Les19Component;
  let fixture: ComponentFixture<Les19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Les19Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Les19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
