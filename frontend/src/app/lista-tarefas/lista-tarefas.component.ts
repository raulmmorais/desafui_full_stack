import { Component, OnInit } from '@angular/core';
import { TarefasService } from '../tarefas-service.service';
import { Response } from '@angular/http';

@Component({
  selector: 'lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {

  tarefas: any[] = [];
  tituloTarefa: string;
  descricaoTarefa: string;

  constructor(private tarefasService: TarefasService) { }

  ngOnInit() {
    console.log("Iniciando APP");
    this.listarTarefas();
  }

  listarTarefas(){
    console.log("Listar Tarefas");
    this.tarefasService.pesquisarTarefas().subscribe((response: Response) => {
      this.tarefas = response.json();
      console.log(this.tarefas)
    });
  }

  apagarTarefa(id:string){
    console.log("Apagar Tarefa" + id);
    this.tarefasService.apagarTarefa(id);
    this.tarefas = [];
    this.listarTarefas();
  }

  adicionarTarefa(){
    this.tarefasService.adicionarTarefa(this.tituloTarefa, this.descricaoTarefa);
    this.tituloTarefa = "";
    this.descricaoTarefa = "";
    this.listarTarefas();
  }

  editarTarefa(tarefa: any){
    this.tarefasService.editarTarefa(tarefa);
    console.log(tarefa)
  }

  alterarTitulo(titulo: string, tarefa: any){
    console.log(titulo);
    tarefa.titulo = titulo;
    this.tarefasService.editarTarefa(tarefa);
  }

  alterarDescricao(descricao: string, tarefa: any){
    console.log(descricao);
    tarefa.descricao = descricao;
    this.tarefasService.editarTarefa(tarefa);
  }

  alterarConcluida(concluida: boolean, tarefa: any){
    console.log(concluida);
    tarefa.concluida = concluida;
    this.tarefasService.editarTarefa(tarefa);
  }
  
}
