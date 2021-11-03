import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {

  today : any

  todoList : any

  todoListSub!: Subscription;

  onChangeStatus(i: number) {
    this.todoService.onChangeStatus(i)
  }

  onChangeIsModif(i: number) {
    this.todoService.onChangeIsModif(i)
  }

  onView(id: number) {
    this.router.navigate(['single-todo', id])
  }

  constructor(private todoService: TodoService, private router : Router) { }

  ngOnDestroy(): void {
    this.todoListSub.unsubscribe()
  }

  ngOnInit(): void {
    this.today = this.todoService.today
    this.todoListSub = this.todoService.todoListSubject.subscribe(
      (value : any[]) => {
        this.todoList = value
      },
      (error) => {
        console.log("Erreur: "+error);
      },
      () => {
        console.log("Observable complétée");
      }
    )
    this.todoService.emitTodoList()
  }

}
