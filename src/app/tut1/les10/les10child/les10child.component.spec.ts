import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Les10childComponent } from './les10child.component';

describe('Les10childComponent', () => {
  let component: Les10childComponent;
  let fixture: ComponentFixture<Les10childComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Les10childComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Les10childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
