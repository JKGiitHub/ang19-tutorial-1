import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Les9parentComponent } from './les9parent.component';

describe('Les9parentComponent', () => {
  let component: Les9parentComponent;
  let fixture: ComponentFixture<Les9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Les9parentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Les9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
