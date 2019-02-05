import { TarefaService } from './../../../services/tarefa/tarefa.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa/tarefa';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  minutos = '00';
  segundos = '00';
  regressao;
  tarefaExecucao: Tarefa;

  @ViewChild('minuto') minuto: ElementRef;
  @ViewChild('segundo') segundo: ElementRef;

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefaExecucao = new Tarefa();
  }

  iniciar(): void {
    if (this.verificarTarefa()) {
      this.selecionarTarefa();
      this.minutos = '01';
      this.iniciarRegressao();
    }
  }

  iniciarRegressao(): void {
    this.regressao = setInterval(() => {
      if (this.minuto.nativeElement.textContent === '00' && this.segundo.nativeElement.textContent === '00') {
        this.pararRegressao();
      } else if (this.segundo.nativeElement.textContent === '00') {
        this.subtrairMinuto();
        this.segundo.nativeElement.textContent = '09';
      } else {
        this.subtrairSegundo();
      }
    }, 1000);
  }

  pararRegressao(): void {
    clearInterval(this.regressao);
  }

  subtrairMinuto(): void {
    this.minuto.nativeElement.textContent -= 1;
    if (this.minuto.nativeElement.textContent.length < 2) {
      this.minuto.nativeElement.textContent = '0' + this.minuto.nativeElement.textContent;
    }
  }

  subtrairSegundo(): void {
    this.segundo.nativeElement.textContent -= 1;
    if (this.segundo.nativeElement.textContent.length < 2) {
      this.segundo.nativeElement.textContent = '0' + this.segundo.nativeElement.textContent;
    }
  }

  verificarTarefa(): boolean {
    if (this.tarefaService.tarefas.length <= 0) {
      alert('Cadastre uma tarefa antes de iniciar o cronometro');
      return false;
    }
    return true;
  }

  selecionarTarefa(): void {
    if (!this.tarefaExecucao.id) {
      this.tarefaExecucao = this.tarefaService.tarefas[1];
    } else {

    }
  }

}
