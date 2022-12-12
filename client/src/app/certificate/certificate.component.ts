import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
declare let PDFLib: any;
const { PDFDocument, rgb, degrees, StandardFonts } = PDFLib;

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  name="your name here";
  file_location="../../assets/certificates/Rubrix_200_230_45_Helvetica.pdf"
  file_location2="../../assets/certificates/Rubrix_200_230_45_Helvetica.pdf"
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }  

  generatecertificate=async (name: string, file_location: string) =>{
  var vars=file_location.replace(".pdf", "").replace("../../assets/certificates/", "").split("_");
  
  const existingPdfBytes = await fetch(file_location).then(res => res.arrayBuffer())
  const pdfDoc = await PDFDocument.load(existingPdfBytes)
  const Font = await pdfDoc.embedFont(StandardFonts[vars[4]])  
  const page = pdfDoc.getPages()[0]
  const {width, height} = page.getSize();
  page.drawText(name, {
    x: (width-27*name.length)/2, 
    y: Number(vars[2]), 
    size: Number(vars[3]),
    font: Font
  })
  const pdfDataUri = await pdfDoc.saveAsBase64({DataUri: true});
  var a=document.createElement("a");
  a.href = "data:application/pdf;base64,"+  pdfDataUri;
  a.download = vars[0]+"_"+name+".pdf";
  a.click();
}


generatecertificatefrommage=async (name: string, file_location: string) =>{
  var vars=file_location.replace(".jpg", "").replace("../../assets/certificates/", "").split("_");
  var height, width;
  var img=new Image();
  img.onload = function(){
    height=img.height;
    width=img.width;
  }  
  img.src=file_location;
  const pdfDoc = await PDFDocument.create()
  const Font = await pdfDoc.embedFont(StandardFonts[vars[4]])  
  // const page = pdfDoc.addPage(height, width);
  const page=pdfDoc.embedJpg(img.baseURI)
  page.drawText(name, {
    x: (width-27*name.length)/2, 
    y: Number(vars[2]), 
    size: Number(vars[3]),
    font: Font
  })
  const pdfDataUri = await pdfDoc.saveAsBase64({DataUri: true});
  var a=document.createElement("a");
  a.href = "data:application/pdf;base64,"+  pdfDataUri;
  a.download = vars[0]+"_"+name+".pdf";
  a.click();
}

}
