import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoAppRoutingModule } from './todo-app-routing.module';
import { TodoappComponent } from './todoapp/todoapp.component';
import { TodoformComponent } from './todoform/todoform.component';
import { TodoeditComponent } from './todoedit/todoedit.component';
import { TodoviewComponent } from './todoview/todoview.component';
import { TodoformchildComponent } from './todoformchild/todoformchild.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TodoappComponent,
    TodoformComponent,
    TodoeditComponent,
    TodoviewComponent,
    TodoformchildComponent
  ],
  imports: [
    CommonModule,
    TodoAppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    TodoappComponent
  ]
})
export class TodoAppModule { }
