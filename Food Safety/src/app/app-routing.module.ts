import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioPageModule)
  },
  {
  path: 'detalhe/:id',
  loadChildren: () => import('./detalhe/detalhe.module').then(m => m.DetalhePageModule)
  },
  {
  path: 'meal-detail/:id',
    loadChildren: () => import('./detalhe/detalhe.module').then(m => m.DetalhePageModule)
  },
  {
    path: 'meal',
    loadChildren: () => import('./detalhe/detalhe.module').then(m => m.DetalhePageModule)
  },
  {
  path: 'categoria/:nome',
  loadChildren: () => import('./categoria/categoria.module').then(m => m.CategoriaPageModule)
},


  {
    path: 'configuracoes',
    loadChildren: () => import('./compartilhar/compartilhar.module').then(m => m.CompartilharPageModule)
  },
  {
    path: 'politicas',
    loadChildren: () => import('./politicas/politicas.module').then(m => m.PoliticasPageModule)
  },
  {
    path: 'temas',
    loadChildren: () => import('./temas/temas.module').then(m => m.TemasPageModule)
  },
  {
    path: 'detalhe',
    loadChildren: () => import('./detalhe/detalhe.module').then( m => m.DetalhePageModule)
  },
  {
    path: 'categoria',
    loadChildren: () => import('./categoria/categoria.module').then( m => m.CategoriaPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'editar-perfil',
    loadChildren: () => import('./editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}