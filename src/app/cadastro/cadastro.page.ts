import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  user: string;
  email: string;
  senha: string;

  constructor(private navCtrl: NavController) {
    this.user = '';
    this.email = '';
    this.senha = '';
  }

  cadastrar() {
    // Salvar o email e senha no armazenamento local (LocalStorage)
    localStorage.setItem('user', this.user);
    localStorage.setItem('email', this.email);
    localStorage.setItem('senha', this.senha);

    // Exibir os dados no console para confirmar o armazenamento
    console.log('Usuário:', this.user);
    console.log('Email:', this.email);
    console.log('Senha:', this.senha);

    // Redirecionar para a tela de login
    this.navCtrl.navigateForward('/login');
  }
}
