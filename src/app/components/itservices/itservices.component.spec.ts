import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItservicesComponent } from './itservices.component';

describe('ItservicesComponent', () => {
  let component: ItservicesComponent;
  let fixture: ComponentFixture<ItservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
