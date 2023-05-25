import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BemVindo2PageRoutingModule } from './bem-vindo2-routing.module';

import { BemVindo2Page } from './bem-vindo2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BemVindo2PageRoutingModule
  ],
  declarations: [BemVindo2Page]
})
export class BemVindo2PageModule {}
