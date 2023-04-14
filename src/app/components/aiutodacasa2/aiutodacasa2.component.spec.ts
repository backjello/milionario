import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aiutodacasa2Component } from './aiutodacasa2.component';

describe('Aiutodacasa2Component', () => {
  let component: Aiutodacasa2Component;
  let fixture: ComponentFixture<Aiutodacasa2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aiutodacasa2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aiutodacasa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
