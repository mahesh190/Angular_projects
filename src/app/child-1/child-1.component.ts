import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-child-1',
  templateUrl: './child-1.component.html',
  styleUrl: './child-1.component.css'
})
export class Child1Component implements OnInit{
name:any="";

constructor(public mysu : MyserviceService){

}
  ngOnInit() {
    this.mysu.myName.subscribe((val)=>{
      this.name=val;
    })
  }
}
