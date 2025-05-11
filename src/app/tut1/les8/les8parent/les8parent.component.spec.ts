import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Les8parentComponent } from './les8parent.component';

describe('Les8parentComponent', () => {
  let component: Les8parentComponent;
  let fixture: ComponentFixture<Les8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Les8parentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Les8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
