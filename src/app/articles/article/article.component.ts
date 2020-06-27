import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() name;
  @Input() price;
  @Input() amount;



  newTask: string;
  taskList: Array<string>=[];
  tasksDone: Array<string>=[];

  add(){
this.taskList.push(this.newTask);
this.newTask = '';
console.log(this.taskList);
  }

  remove(task: string){
this.taskList = this.taskList.filter( e => e !==task)
  }



  constructor() { }

  ngOnInit(): void {
  }

}
