import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skillv1 } from '../model/skillv1';

@Injectable({
  providedIn: 'root'
})
export class Skillv1Service {
  URL= 'https://apemdback.herokuapp.com/skillv1/'
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skillv1[]>{
    return this.httpClient.get<Skillv1[]>(this.URL + 'lista');
  }


  public details(id:number):Observable<Skillv1>{
    return this.httpClient.get<Skillv1>(this.URL + `detail/${id}`);
  }

  public save(skillv1:Skillv1):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', skillv1);
  }

  public update(id:number, skillv1: Skillv1):Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, skillv1);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
