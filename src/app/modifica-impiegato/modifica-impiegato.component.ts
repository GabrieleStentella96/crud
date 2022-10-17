import { Component, OnInit } from '@angular/core';
import { Impiegato } from '../impiegato';
import { ImpiegatoService } from '../impiegato.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifica-impiegato',
  templateUrl: './modifica-impiegato.component.html',
  styleUrls: ['./modifica-impiegato.component.scss']
})
export class ModificaImpiegatoComponent implements OnInit {

  id!: number;
  employee: Impiegato = new Impiegato();
  constructor(private employeeService: ImpiegatoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getIdImpiegato(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.employeeService.updateImpiegato(this.id, this.employee).subscribe( data =>{
      this.goToListaImpiegato();
    }
    , error => console.log(error));
  }

  goToListaImpiegato(){
    this.router.navigate(['/impiegato']);
  }

}
