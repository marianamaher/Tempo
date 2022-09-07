import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit {

  workDuration= 25
  secondsDuration = 0
  minutes = this.workDuration-1
  seconds = 59
  interval:any = 0
  message = 'Get to work!'


  constructor() {
 
   }

  ngOnInit(): void {
  }
  
  start(){

    this.interval = setInterval(()=> counter(), 1000)

    const counter= () =>{
      this.workDuration= this.minutes
      this.secondsDuration = this.seconds

      this.seconds--
      if(this.seconds==-1){
        this.minutes--
        this.seconds = 59
        if(this.minutes==-1){
          this.message='Now get some deserved rest!'
          this.minutes= 25
        }
      }
    }
  }

}
