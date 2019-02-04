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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }

  enviarTarefa() {
    const tarefa: Tarefa = Object.assign({}, this.tarefaForm.value);
  }
}
