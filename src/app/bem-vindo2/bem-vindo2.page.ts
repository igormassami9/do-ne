import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bem-vindo2',
  templateUrl: './bem-vindo2.page.html',
  styleUrls: ['./bem-vindo2.page.scss'],
})
export class BemVindo2Page {

  constructor(private navCtrl: NavController) { }

  irParaProximaPagina() {
    this.navCtrl.navigateForward('/bem-vindo3');
  }
}
