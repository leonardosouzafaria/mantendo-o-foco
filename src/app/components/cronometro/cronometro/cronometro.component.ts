import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  minutos = '00';
  segundos = '00';
  regressao;

  @ViewChild('minuto') minuto: ElementRef;
  @ViewChild('segundo') segundo: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  iniciar(): void {
    this.minutos = '01';
    this.iniciarRegressao();
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

}
