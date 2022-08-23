import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Circleprogress } from '../model/circleprogress';

@Injectable({
  providedIn: 'root'
})
export class CircleprogressService {
URL= 'https://apemdback.herokuapp.com/porcentaje/'
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Circleprogress[]>{
    return this.httpClient.get<Circleprogress[]>(this.URL + 'lista');
  }


  public details(id:number):Observable<Circleprogress>{
    return this.httpClient.get<Circleprogress>(this.URL + `detail/${id}`);
  }

  public save(circleprogress:Circleprogress):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', circleprogress);
  }

  public update(id:number, circleprogress: Circleprogress):Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, circleprogress);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}
