import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  addBudget(){
  let data = { id:1, name:'XYZ'};
localStorage.setItem('session',JSON.stringify(data))
}
}
