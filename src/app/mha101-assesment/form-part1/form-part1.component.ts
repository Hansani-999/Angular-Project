import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-form-part1',
  templateUrl: './form-part1.component.html',
  styleUrls: ['./form-part1.component.css']
})
export class FormPart1Component implements OnInit, OnDestroy {

  firstForm = new FormGroup({
    CPDMR_ID: new FormControl('',[Validators.required]),
    FORM_ID: new FormControl(''),
    BH_UR_NO: new FormControl(''),
    MH_UR_NO: new FormControl(''),
    surName: new FormControl(''),
    givenName: new FormControl('',[Validators.required]),
    DOB: new FormControl(''),
    Sex: new FormControl(''),
    episodeDate: new FormControl(''),
    Team: new FormControl(''),


  })

  formUSer()
  {
     console.warn(this.firstForm.value)
  }

  get CPDMR_ID()
  {
    return this.firstForm.get('CPDMR_ID')
  }

  constructor() { }

  ngOnInit(): void {
    
  }
  
 
  
ngOnDestroy(): void {
    
}

}
