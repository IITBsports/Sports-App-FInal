import { Component, OnInit } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { FormControl, Validators } from '@angular/forms';
import { format } from 'highcharts';
import { ContactService } from './contact.service';




@Component({
  selector: 'app-girls',
  templateUrl: './girls.component.html',
  styleUrls: ['./girls.component.css']
})
export class GirlsComponent implements OnInit {
  parulno = '9509240643';
  parulid = "parul291299@gmail.com";
  nityaid = "nitya.garg@sjmsom.in";
  nityano = '9882155133';
  manishaid = "manishakopuri27@gmail.com";
  manishano = '8500487326';
  bhargaviid = "bhargavi.taralekar2606@gmail.com";
  bhargavino = '9594908108';
  ananyaid = "mailanananyashankar@gmail.com";
  ananyano = '8879474867';
  dikshaid = "diks.chanda@gmail.com";
  dikshano = '9328493602';



  public isAnon: boolean = false;
  hide() {
    this.isAnon = true;
  }
  show() {
    this.isAnon = false;
  }

  modeFormControl = new FormControl("Non-Anonymous", [
    Validators.required,
  ]);
  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(3)
  ]);

  rollNoFormControl = new FormControl("", [
    Validators.required,
  ]);

  typeFormControl = new FormControl("");

  detailsFormControl = new FormControl("", [
    Validators.required,
  ]);

  constructor(public http: ContactService) { }
  ngOnInit() { }

  onSubmit() {
    let user = {
      name: this.nameFormControl.value,
      rollNumber: this.rollNoFormControl.value,
      type: this.typeFormControl.value,
      details: this.detailsFormControl.value,
    }
    this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
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
    this.detailsFormControl.reset();
    this.typeFormControl.reset();
    this.rollNoFormControl.reset();
    this.nameFormControl.reset();


  }


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

}