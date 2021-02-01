import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriadTeacherComponent } from './triad-teacher.component';

describe('TriadTeacherComponent', () => {
  let component: TriadTeacherComponent;
  let fixture: ComponentFixture<TriadTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriadTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriadTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
