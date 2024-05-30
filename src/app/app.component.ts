import { Component, OnInit } from '@angular/core';
import { UsersDetails } from './users-details';
import { Observable, filter, from, map } from 'rxjs';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  myForm: any;
  constructor(public myser:MyserviceService){

  }
parentdata:any=""
  title = 'NoStandaloneApp';
 userformt = new UsersDetails("mahesh","mahesh@test.com");
arry:any[]=[1,2,3,4,5]
myobse = from(this.arry);
changeSub(){
this.myser.myName.next("New Subject Name")
}
newobser = this.myobse.pipe(map((val)=>{
  return val*5
  
}))
test= this.newobser.pipe(filter((res)=>{
  return res>20
  
}))
seachNm: string="";

  ngOnInit(): void {
    this.myser.myName.subscribe((res)=>{
this.parentdata=res;
    })
  this.test.subscribe((result)=>{
  console.log(result)
})
  }

  click(){
  console.log(this.userformt);
  }
  datas:any[]=[];

  adddata(item:string){
   this.datas.push({id:this.datas.length,name:item});
  }
  removedata(id:number){
    this.datas=this.datas.filter((res: { id: number; })=>res.id!==id)
  }
  userForms = new FormGroup({
    usernames:new FormControl("",[Validators.required]),
    email:new FormControl("test@te.com"),
    hobbies:new FormArray([])
  })

  get usernames(){
    return this.userForms.get("usernames");

  }
  get hobbies():FormArray{
    return this.userForms.get("hobbies") as FormArray
  }

  addHobbies(){
    this.hobbies.push(new FormControl(''))
  }

  removeHobbies(index:any){
    this.hobbies.removeAt(index)
  }
  subm(){
    console.log(this.userForms.value)
  }
   mydata:any = [
    {id: 1, name: 'Burger', price: 50},
    {id: 2, name: 'Sandwich', price: 150},
    {id: 3, name: 'Pizza', price: 250}
    ];
}
