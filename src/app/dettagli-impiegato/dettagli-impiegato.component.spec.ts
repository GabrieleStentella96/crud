import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliImpiegatoComponent } from './dettagli-impiegato.component';

describe('DettagliImpiegatoComponent', () => {
  let component: DettagliImpiegatoComponent;
  let fixture: ComponentFixture<DettagliImpiegatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettagliImpiegatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettagliImpiegatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
