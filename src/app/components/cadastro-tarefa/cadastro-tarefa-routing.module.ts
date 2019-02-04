import { CadastroTarefaComponent } from './cadastro-tarefa/cadastro-tarefa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: CadastroTarefaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroTarefaRoutingModule { }
