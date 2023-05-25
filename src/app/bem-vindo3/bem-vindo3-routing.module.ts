import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BemVindo3Page } from './bem-vindo3.page';

const routes: Routes = [
  {
    path: '',
    component: BemVindo3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BemVindo3PageRoutingModule {}
