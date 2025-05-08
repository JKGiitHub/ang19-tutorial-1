import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Les7Component } from './les7.component';

describe('Les7Component', () => {
  let component: Les7Component;
  let fixture: ComponentFixture<Les7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Les7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Les7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
