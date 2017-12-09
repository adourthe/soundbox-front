import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundbuttonComponent } from './soundbutton.component';

describe('SoundbuttonComponent', () => {
  let component: SoundbuttonComponent;
  let fixture: ComponentFixture<SoundbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
