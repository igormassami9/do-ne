import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BemVindo2Page } from './bem-vindo2.page';

const routes: Routes = [
  {
    path: '',
    component: BemVindo2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BemVindo2PageRoutingModule {}
