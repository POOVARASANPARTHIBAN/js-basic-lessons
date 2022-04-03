import { Component, OnInit } from '@angular/core';
// import { EmployeeData } from '../';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  model = new EmployeeData(123,"Aditya",10000,"Sales");
  headers = ["empId", "empName", "empSal", "empDep"];
  rows =         [
                   {empId:1001,empName:"Rahul",empSal:9000,empDep:"Java"},
                   {empId:1002,empName:"Sachin",empSal:19000,empDep:"OraApps"},
                   {empId:1003,empName:"Vikash",empSal:29000,empDep:"BI"},
                   ];
  onUpdate() {
    console.log(this.model);
    this.rows.push(this.model);
  }
  constructor() { }

  ngOnInit() {
  }

}