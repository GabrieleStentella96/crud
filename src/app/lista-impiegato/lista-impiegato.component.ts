import { Component, OnInit } from '@angular/core';
import { Impiegato } from '../impiegato'
import { ImpiegatoService } from '../impiegato.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-impiegato',
  templateUrl: './lista-impiegato.component.html',
  styleUrls: ['./lista-impiegato.component.scss']
})
export class ListaImpiegatoComponent implements OnInit {

  impiegato!: Impiegato[];

  constructor(private ImpiegatoService: ImpiegatoService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.ImpiegatoService.getListaImpiegato().subscribe(data => {
      this.impiegato = data;
    });
  }

  employeeDetails(id: number){
    this.router.navigate(['dettagli-impiegato', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['modifica-impiegato', id]);
  }

  deleteEmployee(id: number){
    this.ImpiegatoService.deleteImpiegato(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }

}
