import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangularComponent } from './rectangular/rectangular.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { MarksComponent } from './marks/marks.component';
import { TableComponent } from './table/table.component';
import { PricePipe } from './price.pipe';
import { RatingPipe } from './rating.pipe';
import { EventComponent } from './event/event.component';
import { CarsComponent } from './cars/cars.component';
import { ProductsComponent } from './products/products.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    AboutComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangularComponent,
    CircleComponent,
    BmiComponent,
    DirectivesComponent,
    MarksComponent,
    TableComponent,
    PricePipe,
    RatingPipe,
    EventComponent,
    CarsComponent,
    ProductsComponent,
    VehicleComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
