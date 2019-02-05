import { TarefaService } from './../../../services/tarefa/tarefa.service';
import { Tarefa } from './../../../models/tarefa/tarefa';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  tarefaForm = this.fb.group(new Tarefa());

  constructor(private fb: FormBuilder, private tarefaService: TarefaService) { }

  ngOnInit() {

  }

  enviarTarefa() {
    const tarefa: Tarefa = Object.assign({}, this.tarefaForm.value);

    this.tarefaService.adicionarTarefa(tarefa);
    this.tarefaService.tarefaIncluida.emit(this.tarefaService.tarefas);
  }
}
