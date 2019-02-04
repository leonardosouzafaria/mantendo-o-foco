import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroTarefaRoutingModule } from './cadastro-tarefa-routing.module';
import { CadastroTarefaComponent } from './cadastro-tarefa/cadastro-tarefa.component';
import { FormModule } from '../form/form.module';

@NgModule({
  declarations: [CadastroTarefaComponent],
  imports: [
    CommonModule,
    CadastroTarefaRoutingModule,
    FormModule
  ]
})
export class CadastroTarefaModule { }
