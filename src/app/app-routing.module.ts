import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CtProductComponent } from './Product/ct-product/ct-product.component';
import { DsProductComponent } from './Product/ds-product/ds-product.component';
import { EditProductComponent } from './Product/edit-product/edit-product.component';
import { NewProductComponent } from './Product/new-product/new-product.component';

const routes: Routes = [
  {path:'',component: DsProductComponent},
  {path:'ct/:id',component: CtProductComponent},
  {path:'new',component: NewProductComponent},
  {path:'edit/:id',component: EditProductComponent},
  {path:'**',redirectTo:'',pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
