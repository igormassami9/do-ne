import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.page.html',
  styleUrls: ['./bem-vindo.page.scss'],
})
export class BemVindoPage {

  constructor(private navCtrl: NavController) { }

  irParaProximaPagina() {
    this.navCtrl.navigateForward('/bem-vindo2');
  }
}
