import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSateliteComponent } from './edit-satelite.component';

describe('EditSateliteComponent', () => {
  let component: EditSateliteComponent;
  let fixture: ComponentFixture<EditSateliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSateliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSateliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
