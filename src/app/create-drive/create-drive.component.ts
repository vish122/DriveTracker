import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ServletService } from '../servlet.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-drive',
  templateUrl: './create-drive.component.html',
  styleUrls: ['./create-drive.component.css']
})
export class CreateDriveComponent implements OnInit {

   driveform:FormGroup;

   constructor(private _servletService:ServletService, private _r:Router){}
    
  ngOnInit()
  {
    this.driveform=new FormGroup({
    
    companyname:new FormControl('',[Validators.required]),
    exp:new FormControl('',[Validators.required]),
    ctc:new FormControl('',[Validators.required]),
    joining:new FormControl('',[Validators.required]),
    bond:new FormControl('',[Validators.required]),
    position:new FormControl('',[Validators.required]),
    education:new FormControl('',[Validators.required]),
    followup: new FormControl('',[Validators.required]),
   
    });
  }

  submit() {
    
    this._servletService.register(this.driveform.value).subscribe();
              // .subscribe(response => console.log("Success!!!",response),
              // error=>console.error("Errrror!!!",error)); 
              console.log(this.driveform.value); 
              alert("Successfully Submitted.");
              // this.driveform.reset();
              // this.driveform.clearValidators;

              this._r.navigate(['/view']);
           }
}
