import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Les6Component } from './les6.component';

describe('Les6Component', () => {
  let component: Les6Component;
  let fixture: ComponentFixture<Les6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Les6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Les6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
