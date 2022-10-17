import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreazioneImpiegatoComponent } from './creazione-impiegato.component';

describe('CreazioneImpiegatoComponent', () => {
  let component: CreazioneImpiegatoComponent;
  let fixture: ComponentFixture<CreazioneImpiegatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreazioneImpiegatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreazioneImpiegatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
