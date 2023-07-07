import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedeatailsComponent } from './moviedeatails.component';

describe('MoviedeatailsComponent', () => {
  let component: MoviedeatailsComponent;
  let fixture: ComponentFixture<MoviedeatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviedeatailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviedeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
