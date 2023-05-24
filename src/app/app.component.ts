import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {
    const isLoggedIn = this.checkIfUserIsLoggedIn(); // Verifica se o usuário já está logado

    if (isLoggedIn) {
      this.router.navigateByUrl('/tabs/tab1'); // Redireciona para a página de tabs se o usuário já estiver logado
    } else {
      this.router.navigateByUrl('/login'); // Redireciona para a página de login se o usuário não estiver logado
    }
  }

  checkIfUserIsLoggedIn(): boolean {
    // Lógica para verificar se o usuário já está logado
    // Retorne true se o usuário estiver logado, caso contrário, retorne false
    return false; // Exemplo: nenhum usuário logado
  }
}
