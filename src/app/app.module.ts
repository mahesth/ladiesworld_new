import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdsFormComponent } from './ads-form/ads-form.component';
import { AdsFormTamilComponent } from './ads-form-tamil/ads-form-tamil.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AdsFormComponent,
    AdsFormTamilComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
