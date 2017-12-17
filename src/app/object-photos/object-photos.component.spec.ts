import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectPhotosComponent } from './object-photos.component';

describe('ObjectPhotosComponent', () => {
  let component: ObjectPhotosComponent;
  let fixture: ComponentFixture<ObjectPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
