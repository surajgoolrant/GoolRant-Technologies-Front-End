import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubitservicesComponent } from './subitservices.component';

describe('SubitservicesComponent', () => {
  let component: SubitservicesComponent;
  let fixture: ComponentFixture<SubitservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubitservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubitservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
