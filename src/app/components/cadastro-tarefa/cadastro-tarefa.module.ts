import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroTarefaRoutingModule } from './cadastro-tarefa-routing.module';
import { CadastroTarefaComponent } from './cadastro-tarefa/cadastro-tarefa.component';
import { FormModule } from '../form/form.module';
import { TabelaModule } from '../tabela/tabela.module';
import { CronometroModule } from '../cronometro/cronometro.module';

@NgModule({
  declarations: [CadastroTarefaComponent],
  imports: [
    CommonModule,
    CadastroTarefaRoutingModule,
    FormModule,
    TabelaModule,
    CronometroModule
  ]
})
export class CadastroTarefaModule { }
