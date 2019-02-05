import { Component, OnInit, OnDestroy } from '@angular/core';
import { TarefaService } from './../../../services/tarefa/tarefa.service';
import { Tarefa } from './../../../models/tarefa/tarefa';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit, OnDestroy {

  tarefas: Tarefa[];

  tarefaSubscription;

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.verificarTarefa();
  }

  ngOnDestroy() {
    this.tarefaSubscription.unsubscribe();
  }

  verificarTarefa() {
    this.tarefaSubscription = this.tarefaService.tarefaIncluida.subscribe(
      (novaLista: Tarefa[]) => {
        this.tarefas = novaLista;
      }
    );
  }





}
