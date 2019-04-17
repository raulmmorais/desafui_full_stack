import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { TarefasService } from './tarefas-service.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListaTarefasComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    FormsModule
  ],
  providers: [TarefasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
