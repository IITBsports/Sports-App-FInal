import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent implements OnInit {
  UserId = [
    {
      Name: 'Goransh',
      LdapId: '200110042',
    },
  ]
  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }

}
