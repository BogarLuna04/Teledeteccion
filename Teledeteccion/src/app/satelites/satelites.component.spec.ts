import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatelitesComponent } from './satelites.component';

describe('SatelitesComponent', () => {
  let component: SatelitesComponent;
  let fixture: ComponentFixture<SatelitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatelitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatelitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
