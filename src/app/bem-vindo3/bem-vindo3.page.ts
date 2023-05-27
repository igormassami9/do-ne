import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bem-vindo3',
  templateUrl: './bem-vindo3.page.html',
  styleUrls: ['./bem-vindo3.page.scss'],
})
export class BemVindo3Page {

  constructor(private navCtrl: NavController) { }

  irParaProximaPagina() {
    this.navCtrl.navigateForward('/login');
  }
}
