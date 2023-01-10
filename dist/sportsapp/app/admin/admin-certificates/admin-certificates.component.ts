import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { CertificateService } from './certificate.service';


@Component({
  selector: 'app-admin-certificates',
  templateUrl: './admin-certificates.component.html',
  styleUrls: ['./admin-certificates.component.css']
  
})
export class AdminCertificatesComponent implements OnInit {
  selectedFile=null;
  fileChange(event) {
    this.selectedFile=event.target.files[0];
    
  }

  
  constructor(public certificateService:CertificateService) { }

  ngOnInit(): void {  }

  //method to convert csv file's text to JSON
  public csvJSON(csv) {
    var lines = csv.split(/[\r\n]+/);
    var result = [];
    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {

        var obj = {};
        var currentline = lines[i].split(",");

        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }

    return JSON.stringify(result); 
}

  onSubmit(){
    
    //reading content of csv file using File Reader
    let fileReader= new FileReader();
    fileReader.readAsText(this.selectedFile);
    fileReader.onload= () =>{
      let csvdata=fileReader.result;
      var json = this.csvJSON(csvdata);
      
    //subscribe to addCertificate Service to post json data to backend
    this.certificateService.addCertificate(json)
      .subscribe(data =>
        console.log(data))
    }
  }
  }
