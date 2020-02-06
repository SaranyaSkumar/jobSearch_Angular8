import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {path: '', redirectTo: '/form', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'form', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
