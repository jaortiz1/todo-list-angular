import { Component, OnInit } from '@angular/core';
import { TodoInterface } from 'src/app/interfaces/todo.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-todo-list-checked',
  templateUrl: './todo-list-checked.component.html',
  styleUrls: ['./todo-list-checked.component.scss']
})
export class TodoListCheckedComponent implements OnInit {

  todoList: TodoInterface[];
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.getAllTodos();
    this.createForm();
  }
  createForm() {
    const newForm: FormGroup = this.fb.group({
      name: ["", Validators.required,]
    });
    this.form = newForm;

  }

  public addTodo() {
    const newTodo: TodoInterface = {
      id: 0 ,
      name: this.form.get('name').value,
      checked: false
    }
    newTodo.id = this.todoList[this.todoList.length-1].id +1;
    this.todoList.push(newTodo);
    console.log(newTodo)
  }
  
  
  public getAllTodos() {
    this.todoList = [
      {
        id: 0,
        name: "Go to the cinema",
        checked: false
      },
      {
        id: 1,
        name: "Buy a car",
        checked: false
      }
    ];
  }

}
