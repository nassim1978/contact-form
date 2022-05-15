import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NassimContactFormComponent } from './nassim-contact-form.component';

describe('NassimContactFormComponent', () => {
  let component: NassimContactFormComponent;
  let fixture: ComponentFixture<NassimContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NassimContactFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NassimContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
