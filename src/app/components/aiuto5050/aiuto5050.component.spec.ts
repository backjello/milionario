import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aiuto5050Component } from './aiuto5050.component';

describe('Aiuto5050Component', () => {
  let component: Aiuto5050Component;
  let fixture: ComponentFixture<Aiuto5050Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aiuto5050Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aiuto5050Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
