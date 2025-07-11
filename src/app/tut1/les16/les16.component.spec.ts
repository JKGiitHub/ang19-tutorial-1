import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Les16Component } from './les16.component';

describe('Les16Component', () => {
  let component: Les16Component;
  let fixture: ComponentFixture<Les16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Les16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Les16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
