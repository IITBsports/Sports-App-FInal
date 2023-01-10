import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(public http: ContactService) { }
  step;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(3)
  ]);

  rollNumberFormControl = new FormControl("",[
    Validators.required,
  ]);
  typeFormControl = new FormControl("");

  descriptionFormControl = new FormControl("", [
    Validators.required,
  ]);

  onSubmit() {
    let user = {
      name: this.nameFormControl.value,
      rollNumber: this.rollNumberFormControl.value,
      type: this.typeFormControl.value,
      description: this.descriptionFormControl.value,
    }
    this.http.sendEmail("http://localhost:3000/sendmail ", user).subscribe(
      data => {
        let res: any = data;
        console.log(
          "data sent"
        );
      },
      err => {
        console.log(err);
      }, () => { }

    );
    this.descriptionFormControl.reset();
    this.typeFormControl.reset();
    this.rollNumberFormControl.reset();
    this.nameFormControl.reset();


  }


  ngOnInit() {
  }

}
