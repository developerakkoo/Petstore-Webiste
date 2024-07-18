import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsGridPage } from './products-grid.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsGridPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsGridPageRoutingModule {}
