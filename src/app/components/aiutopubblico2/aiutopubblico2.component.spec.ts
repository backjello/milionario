import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aiutopubblico2Component } from './aiutopubblico2.component';

describe('Aiutopubblico2Component', () => {
  let component: Aiutopubblico2Component;
  let fixture: ComponentFixture<Aiutopubblico2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aiutopubblico2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aiutopubblico2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
