import { Component, OnInit } from '@angular/core';
import { Impiegato } from '../impiegato';
import { ImpiegatoService } from '../impiegato.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dettagli-impiegato',
  templateUrl: './dettagli-impiegato.component.html',
  styleUrls: ['./dettagli-impiegato.component.scss']
})
export class DettagliImpiegatoComponent implements OnInit {

  id!: number
  impiegato!: Impiegato
  constructor(private route: ActivatedRoute, private impiegatoService: ImpiegatoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.impiegato = new Impiegato();
    this.impiegatoService.getIdImpiegato(this.id).subscribe( data => {
      this.impiegato = data;
    });
  }

}
