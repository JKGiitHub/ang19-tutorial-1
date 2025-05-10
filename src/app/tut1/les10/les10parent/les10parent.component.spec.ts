import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Les10parentComponent } from './les10parent.component';

describe('Les10parentComponent', () => {
  let component: Les10parentComponent;
  let fixture: ComponentFixture<Les10parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Les10parentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Les10parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
