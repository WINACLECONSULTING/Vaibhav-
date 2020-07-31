import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimengtableComponent } from 'src/app/primengtable/primengtable.component';

import { EnterprisecompanysetupComponent } from './components/enterprisecompanysetup/enterprisecompanysetup.component'; 


const routes: Routes = [
  { path: '', redirectTo: 'enterprisecompanysetup', pathMatch: 'full' },
  { path: 'enterprisecompanysetup', component: EnterprisecompanysetupComponent,pathMatch: 'full' },
  { path: 'primengtableComponent', component: PrimengtableComponent,pathMatch: 'full' },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const RoutingComponent = [EnterprisecompanysetupComponent];
