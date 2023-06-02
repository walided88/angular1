import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'gestion-utilisateurs', component: GestionUtilisateursComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }

