import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  constructor(
    private navCtrl: NavController,
    private router: Router
    ) { 

  }

  telaCadastro() {
    this.navCtrl.navigateForward('/cadastro');
  }

  fazerLogin() {
    // pega os valores digitados nos inputs
    const emailInput = (<HTMLInputElement>document.getElementById('email')).value;
    const senhaInput = (<HTMLInputElement>document.getElementById('senha')).value;
  
    // pega os dados armazenados localmente
    const emailArmazenado = localStorage.getItem('email');
    const senhaArmazenada = localStorage.getItem('senha');
  
    // compara os valores digitados com os dados armazenados
    if (emailInput === emailArmazenado && senhaInput === senhaArmazenada) {
      console.log('Login bem-sucedido');
      this.navCtrl.navigateRoot('/tabs'); // Redireciona para a página de tabs
    } else {
      console.log('Login falhou');
    }
  }
  

  ngOnInit() {
  }
}
