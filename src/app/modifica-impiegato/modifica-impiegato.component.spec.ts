import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaImpiegatoComponent } from './modifica-impiegato.component';

describe('ModificaImpiegatoComponent', () => {
  let component: ModificaImpiegatoComponent;
  let fixture: ComponentFixture<ModificaImpiegatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaImpiegatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificaImpiegatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
