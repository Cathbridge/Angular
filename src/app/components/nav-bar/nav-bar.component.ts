import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  
    @Input() name;
    @Input() page;

    @Input() Fname;
    @Input() Surname;
    @Input() age;
    @Input() date;
    

   

  constructor(private router: Router) { }

  ngOnInit() {
  }

navigator(){

  if (this.name === 'event'){
    this.router.navigate(['detail/event']);  
  } else if (this.name === 'view')
  {this.router.navigate(['detail/view'], {queryParams: {Fname: this.Fname, Surname: this.Surname, age: this.age, date: this.date}})}

}




}
