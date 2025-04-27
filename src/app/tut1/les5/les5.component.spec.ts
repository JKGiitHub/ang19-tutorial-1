import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Les5Component } from './les5.component';

describe('Les5Component', () => {
  let component: Les5Component;
  let fixture: ComponentFixture<Les5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Les5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Les5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
