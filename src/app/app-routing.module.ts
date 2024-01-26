import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangularComponent } from './rectangular/rectangular.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { MarksComponent } from './marks/marks.component';
import { TableComponent } from './table/table.component';
import { EventComponent } from './event/event.component';
import { CarsComponent } from './cars/cars.component';
import { ProductsComponent } from './products/products.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'dashboard',component: DashboardComponent,children:[
    {path:'home', component:HomeComponent},

    {path:'about', component:AboutComponent},
    {path:'databinding', component:DataBindingComponent},
    {path:'calculator', component:CalculatorComponent},
    {path:'rectangular', component:RectangularComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'marks',component:MarksComponent},
    {path:'table',component:TableComponent},
    {path:'event',component:EventComponent},
    {path:'cars',component:CarsComponent},
    {path:'products',component:ProductsComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'accounts',component:AccountsComponent}
  ]},
  {path:'', component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
