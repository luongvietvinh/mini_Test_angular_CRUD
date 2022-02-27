import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TuorComponent} from "./tuor/tuor.component";
import {DetailComponent} from "./detail/detail.component";


const routes: Routes = [
  { path: 'detail', component: DetailComponent },
  { path: 'tuor', component: TuorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
