import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaImpiegatoComponent } from './lista-impiegato.component';

describe('ListaImpiegatoComponent', () => {
  let component: ListaImpiegatoComponent;
  let fixture: ComponentFixture<ListaImpiegatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaImpiegatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaImpiegatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
