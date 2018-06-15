import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  Fname : '';
  Surname : '';
  age : '';
  date: '';

  constructor(
    private router: Router) { }
  ngOnInit() {


  }

  onSubmit(){
    // console.log(this.name);
    // console.log(this.Surname);
    // console.log(this.age);
    // console.log(this.date);

    this.router.navigate(['detail'], {queryParams: {Fname: this.Fname, Surname: this.Surname, age: this.age, date: this.date}});
  }

}
