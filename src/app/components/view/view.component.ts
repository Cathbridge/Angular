import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  Fname : '';
  Surname : '';
  age : '';
  date: '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
        this.Fname = params['Fname']; 
        this.Surname = params['Surname'];
        this.age = params['age'];
        this.date = params['date'] 
        console.log(this.Fname);
        console.log(this.Surname);
        console.log(this.age);
        console.log(this.date);
    
  });


  }

}
