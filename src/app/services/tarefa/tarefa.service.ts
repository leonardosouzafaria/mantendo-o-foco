import { Injectable, EventEmitter } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa/tarefa';


@Injectable({ providedIn: 'root' })
export class TarefaService {

  tarefas: Tarefa[] = [];
  tarefaIncluida = new EventEmitter<Tarefa[]>();

  constructor() { }

  adicionarTarefa(tarefa: Tarefa) {
    this.tarefas.push(this.adicionaId(tarefa));
  }

  adicionaId(tarefa: Tarefa): Tarefa {
    tarefa.id = this.tarefas.length + 1;
    return tarefa;
  }

}
