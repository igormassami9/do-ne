import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'bem-vindo', 
    pathMatch: 'full' 
  },
  {
    path: 'bem-vindo',
    loadChildren: () => import('./bem-vindo/bem-vindo.module').then( m => m.BemVindoPageModule)
  },
  {
    path: 'login', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  { 
    path: 'tabs', 
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) 
  },  {
    path: 'bem-vindo2',
    loadChildren: () => import('./bem-vindo2/bem-vindo2.module').then( m => m.BemVindo2PageModule)
  },
  {
    path: 'bem-vindo3',
    loadChildren: () => import('./bem-vindo3/bem-vindo3.module').then( m => m.BemVindo3PageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },



  // ... outras rotas das páginas do seu aplicativo
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
