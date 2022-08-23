import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://apemdback.herokuapp.com/personas/';

  constructor (private http: HttpClient) { }

  public lista():Observable<persona>{
    return this.http.get<persona>(this.URL + 'traer');
  }

  public save(persona:persona):Observable<any>{
    return this.http.post<any>(this.URL + 'crear', persona);
  }

  public update(id:number):Observable<any>{
    return this.http.put<any>(this.URL + `editar/${id}`, persona);
  }

  public detele(id:number):Observable<any>{
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }

  public getPersona(): Observable <persona> {
    return this.http.get<persona>(this.URL+'traer/perfil');
  }

}
