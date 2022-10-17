import { Injectable } from '@angular/core';
import { Impiegato } from './impiegato';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImpiegatoService {

  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient) { }
  
  getListaImpiegato(): Observable<Impiegato[]>{
    return this.httpClient.get<Impiegato[]>(`${this.baseURL}`);
  }

  createImpiegato(impiegato: Impiegato): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, impiegato);
  }

  getIdImpiegato(id: number): Observable<Impiegato>{
    return this.httpClient.get<Impiegato>(`${this.baseURL}/${id}`);
  }

  updateImpiegato(id: number, impiegato: Impiegato): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, impiegato);
  }

  deleteImpiegato(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  
}
