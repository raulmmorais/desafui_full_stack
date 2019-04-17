import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {Headers} from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  url: string = 'http://localhost:8080/tarefas';

  constructor(private http: Http) { }
  
  pesquisarTarefas():Observable<Response>{
    return this.http.get(this.url);
  }

  apagarTarefa(id : string): void{
    let deleteUrl = this.url + "/" + id;
    console.log(deleteUrl);
    this.http.delete(deleteUrl).subscribe((ok)=>console.log(ok));
  }

  adicionarTarefa(titulo: string, descricao: string): void{
    let body = {
      "titulo": titulo,
      "descricao": descricao,
      "concluida": false
    }
    this.http.post(this.url, body).subscribe((ok)=>console.log(ok));
  }

  editarTarefa(tarefa: any): void{
    let body = {
      "id": tarefa.id,
      "titulo": tarefa.titulo,
      "descricao": tarefa.descricao,
      "concluida": tarefa.concluida
    }
    this.http.put(this.url, body).subscribe((ok)=>console.log(ok));
  }

}
