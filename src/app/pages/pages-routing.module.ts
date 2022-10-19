import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path:'',
    component: HomepageComponent
  },
  {
    path:'list',
    component: ListComponent
  },
  {
    path:'add',
    component: AddComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
