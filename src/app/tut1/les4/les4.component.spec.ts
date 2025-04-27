import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Les4Component } from './les4.component';

describe('Les4Component', () => {
  let component: Les4Component;
  let fixture: ComponentFixture<Les4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Les4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Les4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
