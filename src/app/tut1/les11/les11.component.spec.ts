import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Les11Component } from './les11.component';

describe('Les11Component', () => {
  let component: Les11Component;
  let fixture: ComponentFixture<Les11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Les11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Les11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
