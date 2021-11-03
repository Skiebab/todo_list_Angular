import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  today = new Date()
  todoList! : Todo[]
  todoListSubject = new Subject<any[]>()


  constructor() {
    setTimeout(() => {
      this.todoList = [
        {
          todoName: "Project 1",
          todoStatus: true,
          image: "http://placeimg.com/300/300/tech",
          isModif : false,
          description: "Lorem ipsum is ........"
        },
        {
          todoName: "Project 2",
          todoStatus: false,
          image: "http://placeimg.com/300/300/tech",
          isModif : false,
          description: "Lorem ipsum is ........"
        },
        {
          todoName: "Project 3",
          todoStatus: true,
          image: "http://placeimg.com/300/300/tech",
          isModif : false,
          description: "Lorem ipsum is ........"
        },
        {
          todoName: "Project 4",
          todoStatus: false,
          image: "http://placeimg.com/300/300/tech",
          isModif : false,
          description: "Lorem ipsum is ........"
        },
      ]
      this.emitTodoList()
    }, 3000);
  }

    addTodo(todo: Todo): void {
      this.todoList.unshift(todo)
      this.emitTodoList()
    }

    emitTodoList() {
      this.todoListSubject.next(this.todoList)
    }

    onChangeStatus(i: number) {
      this.todoList[i].todoStatus = !this.todoList[i].todoStatus
      this.emitTodoList()
    }

    onChangeIsModif(i: number) {
      this.todoList[i].isModif = !this.todoList[i].isModif
      this.emitTodoList()
    }

    getTodo(i: number) {
      if (this.todoList[i]) {
        return this.todoList[i]
      }
      else {
        return false
      }
    }
}
