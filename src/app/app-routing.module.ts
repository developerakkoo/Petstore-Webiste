import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products-grid',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'products-grid',
    loadChildren: () => import('./products-grid/products-grid.module').then( m => m.ProductsGridPageModule)
  },
  {
    path: 'add-to-cart',
    loadChildren: () => import('./modals/add-to-cart/add-to-cart.module').then( m => m.AddToCartPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
