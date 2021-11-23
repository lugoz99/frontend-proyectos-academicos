import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFacultadComponent } from './crear-facultad.component';

describe('CrearFacultadComponent', () => {
  let component: CrearFacultadComponent;
  let fixture: ComponentFixture<CrearFacultadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearFacultadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
