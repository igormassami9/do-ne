import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BemVindo3PageRoutingModule } from './bem-vindo3-routing.module';

import { BemVindo3Page } from './bem-vindo3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BemVindo3PageRoutingModule
  ],
  declarations: [BemVindo3Page]
})
export class BemVindo3PageModule {}
