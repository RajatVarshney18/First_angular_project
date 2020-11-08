import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {MenuComponent} from './menu/menu.component';
import {SingleCategoryComponent} from './single-category/single-category.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'single-category',
    component:SingleCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
