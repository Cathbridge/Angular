import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  Fname : '';
  Surname : '';
  age : '';
  date: '';

  info = [
    {name: 'event', page: 'event'},
    {name: 'view', page: 'view'}
  ];


  constructor(private route: ActivatedRoute ) { }

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
