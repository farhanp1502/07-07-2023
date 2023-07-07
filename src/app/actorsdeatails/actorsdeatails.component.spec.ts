import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsdeatailsComponent } from './actorsdeatails.component';

describe('ActorsdeatailsComponent', () => {
  let component: ActorsdeatailsComponent;
  let fixture: ComponentFixture<ActorsdeatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorsdeatailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorsdeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
