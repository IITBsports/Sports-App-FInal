import { Component, OnInit } from '@angular/core';
import { RefreshPageService } from '../refresh-page.service';
export interface Tile {
  text: string;
  cols: number;
  rows: number;
  color: string;
}
class Blog{
  photo: String;
  title: string;
  info: string;
  poster: string;
  date: string;
  id: number;
  tags:string[];
}


@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})

export class FourthComponent implements OnInit {
  value = '';
  postarray=[];

  OnSearch() {
    this.data =this.pagerefresher.getSearchResults(this.value);
    console.log(this.data);
    
    console.log(this.data, this.value);
  }

  
  OnClear() {
    console.log("OnClear");
    this.value = "";
    this.data =this.pagerefresher.getSearchResults(this.value);
    console.log(this.data);
    
    console.log(this.data, this.value);
  }
  
  constructor(private pagerefresher: RefreshPageService) { }
  
  tiles: Tile[] = [
    { text: 'Aavhan Run', cols: 1, rows: 1, color: '../../assets/aavhanrun.jpg' },
    { text: 'Cube Competition', cols: 1, rows: 2, color: '../../assets/cube.jpg' },
    { text: 'Chess Tournament', cols: 1, rows: 2, color: '../../assets/chesstournament2.jpg' },
    { text: 'Aavhan Run', cols: 1, rows: 1, color: '../../assets/aavhanrun.jpg' },
    { text: 'Aavhan Run', cols: 1, rows: 1, color: '../../assets/aavhanrun.jpg' },

    { text: 'Aavhan Run', cols: 1, rows: 1, color: '../../assets/aavhanrun.jpg' },
    { text: 'Aavhan Run', cols: 1, rows: 1, color: '../../assets/aavhanrun.jpg' },
    { text: 'Aavhan Run', cols: 1, rows: 1, color: '../../assets/aavhanrun.jpg' },
    { text: 'Aavhan Run', cols: 1, rows: 1, color: '../../assets/aavhanrun.jpg' },
    { text: 'Cube Competition', cols: 1, rows: 2, color: '../../assets/cube.jpg' },
    { text: 'Chess Tournament', cols: 1, rows: 2, color: '../../assets/chesstournament2.jpg' },
    { text: 'Aavhan Run', cols: 1, rows: 1, color: '../../assets/aavhanrun.jpg' },
    { text: 'Aavhan Run', cols: 1, rows: 1, color: '../../assets/aavhanrun.jpg' },

    { text: 'Aavhan Run', cols: 1, rows: 1, color: '../../assets/aavhanrun.jpg' },
    { text: 'Aavhan Run', cols: 1, rows: 1, color: '../../assets/aavhanrun.jpg' },
    { text: 'Aavhan Run', cols: 1, rows: 1, color: '../../assets/aavhanrun.jpg' },
    { text: 'Cube Competition', cols: 1, rows: 2, color: '../../assets/cube.jpg' },
    { text: 'Aavhan Run', cols: 1, rows: 1, color: '../../assets/aavhanrun.jpg' },
    { text: 'Cube Competition', cols: 1, rows: 2, color: '../../assets/cube.jpg' },
    { text: 'Cube Competition', cols: 1, rows: 2, color: '../../assets/cube.jpg' },
    { text: 'Cube Competition', cols: 1, rows: 2, color: '../../assets/cube.jpg' },


  ];
  data: any;


  ngOnInit() {
    
    this.pagerefresher.getSearchResults(this.value).subscribe((res)=>{
      this.data = res;
    });
    console.log(this.data);
    var post_array=this.data.posts;
    var events_array = this.data.events;
  }
  
}

