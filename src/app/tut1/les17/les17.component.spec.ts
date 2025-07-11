import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Les17Component } from './les17.component';

describe('Les17Component', () => {
  let component: Les17Component;
  let fixture: ComponentFixture<Les17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Les17Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Les17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
