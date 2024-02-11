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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailsComponent } from './mails/mails.component';
import { ActivitiesComponent } from './activities/activities.component';
import { GallaryComponent } from './gallary/gallary.component';
import { SchoolComponent } from './school/school.component';
import { PutaccountsComponent } from './putaccounts/putaccounts.component';
import { PutschoolComponent } from './putschool/putschool.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DisplaytaskComponent } from './displaytask/displaytask.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { MoviesComponent } from './movies/movies.component';
import { AdddetailsComponent } from './adddetails/adddetails.component';
import { SiblingsComponent } from './siblings/siblings.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { RatingComponent } from './rating/rating.component';
import { CalctaskComponent } from './calctask/calctask.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { C1Component } from './c1/c1.component';
import { AboutUsModule } from './about-us/about-us.module';
import { TodoAppModule } from './todo-app/todo-app.module';
import { TodoappComponent } from './todo-app/todoapp/todoapp.component';


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
    AccountsComponent,
    FlipkartComponent,
    MailsComponent,
    ActivitiesComponent,
    GallaryComponent,
    SchoolComponent,
    PutaccountsComponent,
    PutschoolComponent,
    CreateUserComponent,
    CreateTaskComponent,
    ParentComponent,
    ChildComponent,
    DisplaytaskComponent,
    CreateVehicleComponent,
    CocktailComponent,
    MoviesComponent,
    AdddetailsComponent,
    SiblingsComponent,
    Sibling1Component,
    Sibling2Component,
    RatingComponent,
    CalctaskComponent,
    Child1Component,
    Child2Component,
    C1Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule,
    TodoAppModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
