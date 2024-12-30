import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormsMainComponent } from './components/forms-main/forms-main.component';
import { FormsParentComponent } from './components/forms-parent/forms-parent.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'forms_', component: FormsMainComponent },
  { path: 'forms', component: FormsParentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
