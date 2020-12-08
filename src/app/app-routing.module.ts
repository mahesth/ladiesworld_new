import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdsFormTamilComponent } from './ads-form-tamil/ads-form-tamil.component';
import { AdsFormComponent } from './ads-form/ads-form.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

const routes: Routes = [
  {
    path : '',
    redirectTo: 'AdsEnglish',
    pathMatch: 'full'
  },
  {
    path: 'AdsEnglish',
    component: AdsFormComponent,
    data: { state: 'AdsEnglish' }
  },
  {
    path: 'AdsTamil',
    component: AdsFormTamilComponent,
    data: { state: 'AdsTamil' }
  },
  {
    path : 'CustomerDetails',
    component: CustomerDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
