import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor(private http: Http) { }
  
  pesquisarTarefas(): Observable<Response>{
    const url = 'localhost:8080/tarefas';
    return this.http.get(url);
  }
}
