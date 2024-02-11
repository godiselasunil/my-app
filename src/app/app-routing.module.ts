import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailsComponent } from './mails/mails.component';
import { ActivitiesComponent } from './activities/activities.component';
import { GallaryComponent } from './gallary/gallary.component';
import { SchoolComponent } from './school/school.component';
import { PutaccountsComponent } from './putaccounts/putaccounts.component';
import { PutschoolComponent } from './putschool/putschool.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ParentComponent } from './parent/parent.component';
import { DisplaytaskComponent } from './displaytask/displaytask.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { MoviesComponent } from './movies/movies.component';
import { AdddetailsComponent } from './adddetails/adddetails.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { SiblingsComponent } from './siblings/siblings.component';
import { CalctaskComponent } from './calctask/calctask.component';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';
import { TodoappComponent } from './todo-app/todoapp/todoapp.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'dashboard', canActivate:[AuthenticationGuard],    component: DashboardComponent,children:[
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
    {path:'accounts',component:AccountsComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'mails',component:MailsComponent},
    {path:'activities',component:ActivitiesComponent},
    {path:'gallary',component:GallaryComponent},
    {path:'school',component:SchoolComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'putaccounts',component:PutaccountsComponent},
    {path:'putschool',component:PutschoolComponent},
    {path:'edit-school/:id',component:PutschoolComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'create-task',component:CreateTaskComponent},
    {path:'parent',component:ParentComponent},
    {path:'edit-vehicle/:id',component:CreateVehicleComponent},
    {path:'displaytask',component:DisplaytaskComponent},
    {path:'edit-task/:id',component:CreateTaskComponent},
    {path:'cocktail',component:CocktailComponent},
    {path:'movies',component:MoviesComponent},
    {path:'add-details',component:AdddetailsComponent},
    {path:'siblings',component:SiblingsComponent},
    {path:'calctask', component:CalctaskComponent},
    {path:'about-company',component:AboutCompanyComponent},
    {
      path: 'contact',
      loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
    },
    {path:'todoapp',component:TodoappComponent}
    
  ]},
  {path:'', component:LoginComponent},
  {path:'**',component:PagenotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
