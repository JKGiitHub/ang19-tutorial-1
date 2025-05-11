import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Les9childComponent } from './les9child.component';

describe('Les9childComponent', () => {
  let component: Les9childComponent;
  let fixture: ComponentFixture<Les9childComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Les9childComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Les9childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
