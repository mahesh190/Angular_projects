import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-child-2',
  templateUrl: './child-2.component.html',
  styleUrl: './child-2.component.css'
})
export class Child2Component implements OnInit{
data:any=""

constructor(public tes:MyserviceService){

}
  ngOnInit(){
this.tes.myName.subscribe((dt)=>{
  this.data=dt
})
  }


}
