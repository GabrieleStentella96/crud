import { Component, OnInit } from '@angular/core';
import { Impiegato } from '../impiegato';
import { ImpiegatoService } from '../impiegato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creazione-impiegato',
  templateUrl: './creazione-impiegato.component.html',
  styleUrls: ['./creazione-impiegato.component.scss']
})
export class CreazioneImpiegatoComponent implements OnInit {

  impiegato: Impiegato = new Impiegato();
  constructor(private ImpiegatoService: ImpiegatoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveImpiegato(){
    this.ImpiegatoService.createImpiegato(this.impiegato).subscribe( data =>{
      console.log(data);
      this.goToListaImpiegato();
    },
    error => console.log(error));
  }

  goToListaImpiegato() {
    this.router.navigate(['/impiegato']);
  }
  
  onSubmit(){
    console.log(this.impiegato);
    this.saveImpiegato();
  }

}
