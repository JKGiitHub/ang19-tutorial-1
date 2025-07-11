import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Les15Component } from './les15.component';

describe('Les15Component', () => {
  let component: Les15Component;
  let fixture: ComponentFixture<Les15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Les15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Les15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
