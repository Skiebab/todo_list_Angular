import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';

export const ROUTES : Routes = [
  {path:'home', component: HomeComponent},
  {path:'todoList', component: TodoComponent},
  {path:'not-found', component: NotFoundComponent},
  {path:'contact', component: ContactComponent},
  {path:'add-todo', component: AddTodoComponent},
  {path:'single-todo/:id', component: SingleTodoComponent},
  {path:'', component: TodoComponent},
  {path:'**', pathMatch:'full', redirectTo: 'not-found'},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoComponent,
    HomeComponent,
    NotFoundComponent,
    SingleTodoComponent,
    ContactComponent,
    AddTodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
