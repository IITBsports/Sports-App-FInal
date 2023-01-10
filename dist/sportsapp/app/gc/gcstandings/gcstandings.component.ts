import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';
import { RefreshPageService } from './../../refresh-page.service';

let gold = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let silver = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let bronze = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let fourth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let pts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


@Component({
  selector: 'app-gcstandings',
  templateUrl: './gcstandings.component.html',
  styleUrls: ['./gcstandings.component.css']
})


export class GcstandingsComponent implements OnInit {
  Points: any = [];
  Pts: any = [];
  Hostel: any = [];
  hostel: any = [];
  gold_final: any = [];
  headers: any = [];
  rows: any = [];
  golds: any = [];
  silvers: any = [];
  bronzes: any = [];
  pts: any = [];

  Events: any = [];
  Show_events = [];
  Hide_events = [];
  new_array: any = [];
  animation_state1 = "out";
  animation_state2 = "out";

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document, private refreshPageService: RefreshPageService, private Activatedroute: ActivatedRoute) {

  }

  ngOnInit() {

    this.Hostel = [
      'Hostel-1',
      'Hostel-2',
      'Hostel-3',
      // 'Hostel-4',
      'Hostel-5',
      'Hostel-6',
      // 'Hostel-7',
      // 'Hostel-8',
      'Hostel-9',
      'Hostel-10',
      'Hostel-11',
      'Hostel-12',
      'Hostel-13',
      'Hostel-14',
      'Hostel-15',
      'Hostel-16',
      'Hostel 17',
      'Hostel 18',
    ];

    this.Points = this.refreshPageService.getPoints();
    this.Pts = this.refreshPageService.getPts();
    console.log(this.Pts)

    this.refreshPageService.getPoints().subscribe((res) => {
      this.Points = res;
      console.log(res)

    });
    this.refreshPageService.getPts().subscribe((res) => {
      this.Pts = res;
      console.log(res)

    });

    this.Points.forEach(element => {
      // console.log(this.index)

      // console.log(element[this.index]);
      // this.index = this.index + 1;
      for (let index = 0; index < this.Points.length; index++) {
        // console.log(this.Points[index].first_place);
        for (let i = 0; i < 15 ; i++) {
          for (let n = 0; n < this.Hostel.length; n++) {
            if (this.Points[index].first_place[i] == this.Hostel[n]) {
              gold[n]++;
            }
            if (this.Points[index].second_place[i] == this.Hostel[n]) {
              silver[n]++;
            }
            if (this.Points[index].third_place[i] == this.Hostel[n]) {
              bronze[n]++;
            }
          }
        }
      }
      console.log(gold)
      console.log(silver)
      this.golds = gold
      this.silvers = silver
      this.bronzes = bronze
      console.log(this.golds)

    });

    this.Pts.forEach(element => {
      // console.log(this.index)

      // console.log(element[this.index]);
      // this.index = this.index + 1;
      for (let index = 0; index < this.Pts.length; index++) {
        // console.log(this.Points[index].first_place);
        for (let i = 0; i < 15; i++) {
          for (let n = 0; n < this.Hostel.length; n++) {
            if (this.Pts[index].Hostel[i] == this.Hostel[n]) {
              pts[n] = this.Pts[index].points;
            }
          }
        }
      }
      console.log(pts)
      this.pts = pts
      console.log(this.pts)

    });
    // for (let k = 0; k < gold.length; k++) {
    //   gold[k] = gold[k] / (this.Points.length);

    // }
    // for (let k = 0; k < silver.length; k++) {
    //   silver[k] = silver[k] / (this.Points.length);

    // }
    // for (let k = 0; k < bronze.length; k++) {
    //   bronze[k] = bronze[k] / (this.Points.length);

    // }
    // this.Pts.forEach(element => {

    //   for (let index = 0; index < this.Pts.length; index++) {
    //     for (let n = 0; n < this.Hostel.length; n++) {
    //       if (this.Pts[index].Hostel == this.Hostel[n]) {

    //         pts[n] = this.Pts[index].points

    //       }
    //     }
    //   }
    //   console.log(this.Pts)
    //   console.log(pts)


    // })
    // for (let index = 0; index < pts.length; index++) {
    //   pts[index] = gold[index] * 10 + silver[index] * 6 + bronze[index] * 4 + fourth[index] * 2 + 0.5 * this.Points.length

    // }
    this.rows = [
      {
        "Hostel": "H1",
        "Gold": gold[0],
        "Silver": silver[0],
        "Bronze": bronze[0],
        "Pts": pts[0]
      },
      {
        "Hostel": "H2",
        "Gold": gold[1],
        "Silver": silver[1],
        "Bronze": bronze[1],
        "Pts": pts[1]
      },
      {
        "Hostel": "H3",
        "Gold": gold[2],
        "Silver": silver[2],
        "Bronze": bronze[2],
        "Pts": pts[2]
      },
      {
        "Hostel": "H4",
        "Gold": gold[3],
        "Silver": silver[3],
        "Bronze": bronze[3],
        "Pts": pts[3]
      },
      {
        "Hostel": "H5",
        "Gold": gold[4],
        "Silver": silver[4],
        "Bronze": bronze[4],
        "Pts": pts[4]
      },
      {
        "Hostel": "H6",
        "Gold": gold[5],
        "Silver": silver[5],
        "Bronze": bronze[5],
        "Pts": pts[5]
      },
      {
        "Hostel": "H7",
        "Gold": gold[6],
        "Silver": silver[6],
        "Bronze": bronze[6],
        "Pts": pts[6]
      },
      {
        "Hostel": "H8",
        "Gold": gold[7],
        "Silver": silver[7],
        "Bronze": bronze[7],
        "Pts": pts[7]
      },
      {
        "Hostel": "H9",
        "Gold": gold[8],
        "Silver": silver[8],
        "Bronze": bronze[8],
        "Pts": pts[8]
      },
      {
        "Hostel": "H10",
        "Gold": gold[9],
        "Silver": silver[9],
        "Bronze": bronze[9],
        "Pts": pts[9]
      },
      {
        "Hostel": "H11",
        "Gold": gold[10],
        "Silver": silver[10],
        "Bronze": bronze[10],
        "Pts": pts[10]
      },
      {
        "Hostel": "H11",
        "Gold": gold[10],
        "Silver": silver[10],
        "Bronze": bronze[10],
        "Pts": pts[10]
      },
      {
        "Hostel": "H13",
        "Gold": gold[12],
        "Silver": silver[12],
        "Bronze": bronze[12],
        "Pts": pts[12]
      },
      {
        "Hostel": "H14",
        "Gold": gold[13],
        "Silver": silver[13],
        "Bronze": bronze[13],
        "Pts": pts[13]
      },
      {
        "Hostel": "H15",
        "Gold": gold[14],
        "Silver": silver[14],
        "Bronze": bronze[14],
        "Pts": pts[14]
      },
      {
        "Hostel": "H16",
        "Gold": gold[15],
        "Silver": silver[15],
        "Bronze": bronze[15],
        "Pts": pts[15]
      },
      {
        "Hostel": "H17",
        "Gold": gold[16],
        "Silver": silver[16],
        "Bronze": bronze[16],
        "Pts": pts[16]
      },
      {
        "Hostel": "H18",
        "Gold": gold[17],
        "Silver": silver[17],
        "Bronze": bronze[17],
        "Pts": pts[17]
      },
      console.log(this.rows)
    ];

    this.hostel = [
      'H1',
      'H2',
      'H3',
      // 'H4',
      'H5',
      'H6',
      // 'H7',
      // 'H8',
      'H9',
      'H10',
      'H11',
      'H12',
      'H13',
      'H14',
      'H15',
      'H16',
      'H17',
      'H18',
    ]


    this.refreshPageService.getAllEvents().subscribe(res => {
      this.new_array = res;
      this.Events = res;

    });

    this.headers = ["Hostel", "Gold", "Silver", "Bronze", "Pts"];


  }


}
