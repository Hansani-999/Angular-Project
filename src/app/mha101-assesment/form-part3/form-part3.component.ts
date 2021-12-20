import { Component, OnDestroy, OnInit } from '@angular/core';

interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-part3',
  templateUrl: './form-part3.component.html',
  styleUrls: ['./form-part3.component.css']
})
export class FormPart3Component implements OnInit,OnDestroy{

  options: Option[] = [
    {value: 'Option-0', viewValue: 'Option1'},
    {value: 'Option-1', viewValue: 'Option2'},
    {value: 'Option-2', viewValue: 'Option3'},
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
      
  }

  

}
