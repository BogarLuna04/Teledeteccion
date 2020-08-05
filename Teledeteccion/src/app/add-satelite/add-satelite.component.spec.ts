import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSateliteComponent } from './add-satelite.component';

describe('AddSateliteComponent', () => {
  let component: AddSateliteComponent;
  let fixture: ComponentFixture<AddSateliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSateliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSateliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
