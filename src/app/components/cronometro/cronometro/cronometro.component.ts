import { TarefaService } from './../../../services/tarefa/tarefa.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa/tarefa';
declare const $: any;

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
  emPausa: boolean;
  pausaFinalizada: boolean;
  tarefaConcluida: boolean;

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefaExecucao = new Tarefa();
  }

  iniciar(manterTarefa: boolean): void {
    if (!this.tarefaConcluida) {
      this.emPausa = false;
      this.minutos = '01';
    }

    if (this.verificarTarefa()) {
      if (!manterTarefa) {
        this.selecionarTarefa();
      } else {
        this.iniciarRegressao();
      }
    }
  }

  iniciarRegressao(): void {
    this.regressao = setInterval(() => {
      if (this.minutos === '00' && this.segundos === '00') {
        this.pararRegressao();
      } else if (this.segundos === '00') {
        this.subtrairMinuto();
        this.segundos = '02';
      } else {
        this.subtrairSegundo();
      }
    }, 1000);
  }

  pararRegressao(): void {
    clearInterval(this.regressao);
    if (this.emPausa) {
      this.pausaFinalizada = true;
    } else {
      this.setPomodoro();
      $('#modalPausa').modal({ backdrop: 'static' });
    }
  }

  subtrairMinuto(): void {
    // tslint:disable-next-line:radix
    let minuto = parseInt(this.minutos);
    minuto -= 1;
    this.minutos = minuto.toString();
    if (this.minutos.length < 2) {
      this.minutos = '0' + this.minutos;
    }
  }

  subtrairSegundo(): void {
    // tslint:disable-next-line:radix
    let segundo = parseInt(this.segundos);
    segundo -= 1;
    this.segundos = segundo.toString();
    if (this.segundos.length < 2) {
      this.segundos = '0' + this.segundos;
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
      this.tarefaExecucao = this.tarefaService.tarefas[0];
      this.iniciarRegressao();
    } else if (this.tarefaService.tarefas[this.tarefaExecucao.id]) {
      this.tarefaExecucao = this.tarefaService.tarefas[this.tarefaExecucao.id];
      this.iniciarRegressao();
    } else {
      this.tarefaConcluida = true;
      this.minutos = '00';
      this.segundos = '00';
      clearInterval(this.regressao);
      this.setPomodoro();
      alert('Cadastre uma próxima tarefa.');
    }
  }

  iniciarPausa(): void {
    this.emPausa = true;
    if (this.tarefaExecucao.quantidadePomodoro < 4) {
      this.minutos = '0' + this.tarefaExecucao.pausaMenor;
      this.minutos = this.minutos;
    }
    this.iniciarRegressao();
  }

  setPomodoro(): void {
    !this.tarefaExecucao.quantidadePomodoro ? this.tarefaExecucao.quantidadePomodoro = 1 : this.tarefaExecucao.quantidadePomodoro++;
  }

}
