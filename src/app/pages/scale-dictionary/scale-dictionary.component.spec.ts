import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleDictionaryComponent } from './scale-dictionary.component';

describe('ScaleDictionaryComponent', () => {
  let component: ScaleDictionaryComponent;
  let fixture: ComponentFixture<ScaleDictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScaleDictionaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
