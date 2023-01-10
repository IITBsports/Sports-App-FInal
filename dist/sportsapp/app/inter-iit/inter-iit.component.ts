import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import * as Highcharts from 'highcharts';
import { RefreshPageService } from '../refresh-page.service';
export interface Standings {
  name: string;
  rank1: string;
  rank2: string;
  rank3: string;
}
export interface PlayerStats {
  playername: string;
  stats: string;
}

export interface Sport {
  name: string;
  gold: string;
  silver: string;
  bronze: string;
  year: string;
}
export interface Legacy {
  year: string;
  winner: string;
  sport: Sport;
}
let gold = [0, 0, 0, 0, 0, 0, 0, 0];
let silver = [0, 0, 0, 0, 0, 0, 0, 0];
let bronze = [0, 0, 0, 0, 0, 0, 0, 0];

@Component({
  selector: 'app-inter-iit',
  templateUrl: './inter-iit.component.html',
  styleUrls: ['./inter-iit.component.css'],
})
export class InterIitComponent implements OnInit {
  selected_tab = 0;
  RunningEventScore: any = [];
  AvsBScore: any = [];
  CricketScore: any = [];
  Points: any = [];
  College: any = [];

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    private refreshPageService: RefreshPageService,
    private Activatedroute: ActivatedRoute
  ) {}
  ngOnInit() {
    let url = this.router.url;
    url.replace('%20', ' ');
    if (url != '/inter-iit') {
      let tab = url.split('/')[2];
      console.log(tab);
      if (tab == 'standings') {
        this.selected_tab = 1;
      }
      if (tab == 'news') {
        this.selected_tab = 2;
      }
      if (tab == 'roh') {
        this.selected_tab = 3;
      }
      if (tab == 'legacy') {
        this.selected_tab = 4;
      }
      console.log(this.selected_tab);
    }
    this.RunningEventScore = this.refreshPageService.getRunningEventScores();
    console.log(this.RunningEventScore);
    this.refreshPageService.getRunningEventScores().subscribe((res) => {
      console.log(res);
      this.RunningEventScore = res;

      console.log(this.RunningEventScore);
    });

    this.AvsBScore = this.refreshPageService.getAvsBScores();
    console.log(this.AvsBScore);
    this.refreshPageService.getAvsBScores().subscribe((res) => {
      console.log(res);
      this.AvsBScore = res;

      console.log(this.AvsBScore);
    });

    this.CricketScore = this.refreshPageService.getCricketScores();
    console.log(this.CricketScore);
    this.refreshPageService.getCricketScores().subscribe((res) => {
      console.log(res);
      this.CricketScore = res;

      console.log(this.CricketScore);
    });
    this.Points = this.refreshPageService.getPoints();
    // console.log(this.Points);
    this.refreshPageService.getPoints().subscribe((res) => {
      // console.log(res);
      this.Points = res;

      console.log(this.Points);
      // console.log(this.Points[0]);
    });
    this.College = [
      'IIT-Bombay',
      'IIT-Delhi',
      'IIT-Kanpur',
      'IIT-Kharagpur',
      'IIT-Guwahati',
      'IIT-Madras',
      'IIT-Roorkee',
      'IIT-BHU',
    ];
    this.Points.forEach((element) => {
      // console.log(this.index)

      // console.log(element[this.index]);
      // this.index = this.index + 1;
      for (let index = 0; index < this.Points.length; index++) {
        // console.log(this.Points[index].first_place);
        for (let i = 0; i < 18; i++) {
          for (let n = 0; n < this.College.length; n++) {
            if (this.Points[index].first_place[i] == this.College[n]) {
              gold[n]++;
            }
            if (this.Points[index].second_place[i] == this.College[n]) {
              silver[n]++;
            }
            if (this.Points[index].third_place[i] == this.College[n]) {
              bronze[n]++;
            }
          }
        }

        // console.log(gold)
      }
      console.log(gold);
      console.log(silver);
    });
  }

  panelOpenState = false;
  displayedColumns: string[] = ['name', 'rank1', 'rank2', 'rank3'];
  dataSource = ELEMENT_DATA;
  Score = PlayerScore;
  displayedColumns1: string[] = ['playername', 'stats'];
  Sport = Sport;

  highcharts = Highcharts;

  chartOptions = {
    chart: {
      type: 'column',
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    title: {
      text: 'Inter-IIT TALLY',
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      floating: true,
      borderWidth: 0.5,

      shadow: false,
    },
    xAxis: {
      categories: [
        'IITB',
        'IITD',
        'IITK',
        'IITKgp',
        'IITG',
        'IITM',
        'IITR',
        'IITBHU',
      ],
      title: {
        text: 'College',
      },
    },
    yAxis: {
      // min: 0,
      title: {
        text: 'Points',
      },
      labels: {
        display: 'none',
      },
      stackLabels: {
        enabled: true,
      },
    },
    tooltip: {
      valueSuffix: 'points',
    },
    // plotOptions: {
    //   column: {
    //     dataLabels: {
    //       enabled: true,
    //     },
    //   },
    //   series: {
    //     stacking: 'normal',
    //   },
    // },
    // credits: {
    //   enabled: false,
    // },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: [
      {
        name: 'Gold',
        // data: [7, 3, 6,1,2,3,4,7,4,2,4,1,2,5,8,7,4,2],
        data: gold,
        color: 'gold',
      },
      {
        name: 'Silver',
        // data: [1, 1, 9,1,2,4,7,8,9,1,3,1,5,7,8,9,5,1],
        data: silver,
        color: 'silver',
      },
      {
        name: 'Bronze',
        // data: [9, 9, 4,1,2,4,5,7,8,4,2,1,2,4,6,8,1,2],
        data: bronze,
        color: 'bronze',
      },
    ],
  };
  scores = [
    {
      score1: 41,
      score2: 21,
      show: false,
      team1details: [
        { name: 'danish', points: 20 },
        { name: 'raghav', points: 21 },
      ],
      team2details: [
        { name: 'danish', points: 20 },
        { name: 'raghav', points: 21 },
      ],
    },
    {
      score1: 41,
      score2: 21,
      show: false,
      team1details: [
        { name: 'danish', points: 20 },
        { name: 'raghav', points: 21 },
      ],
      team2details: [
        { name: 'danish', points: 20 },
        { name: 'raghav', points: 21 },
      ],
    },
    {
      score1: 41,
      score2: 21,
      show: false,
      team1details: [
        { name: 'danish', points: 20 },
        { name: 'raghav', points: 21 },
      ],
      team2details: [
        { name: 'danish', points: 20 },
        { name: 'raghav', points: 21 },
      ],
    },
    {
      score1: 41,
      score2: 21,
      show: false,
      team1details: [
        { name: 'danish', points: 20 },
        { name: 'raghav', points: 21 },
      ],
      team2details: [
        { name: 'danish', points: 20 },
        { name: 'raghav', points: 21 },
      ],
    },
  ];
  toggleview(i) {
    this.scores[i].show = !this.scores[i].show;
  }
  displayedColumnsscores: string[] = ['name', 'points'];

  deleteRunningEvent(id: String) {
    this.refreshPageService.deleteRunningEventScores(id).subscribe((res) => {
      console.log('Deleted');
    });
  }
  deleteAvsB(id: String) {
    this.refreshPageService.deleteAvsBScores(id).subscribe((res) => {
      console.log('Deleted');
    });
  }
  deleteCricket(id: String) {
    this.refreshPageService.deleteCricketScores(id).subscribe((res) => {
      console.log('Deleted');
    });
  }
}

const ELEMENT_DATA: Standings[] = [
  { name: 'Cricket', rank1: 'H-1', rank2: 'H-2', rank3: 'H-3' },
  { name: 'Football', rank1: 'H-1', rank2: 'H-2', rank3: 'H-3' },
  { name: 'Basketball', rank1: 'H-1', rank2: 'H-2', rank3: 'H-3' },
  { name: 'Badminton', rank1: 'H-1', rank2: 'H-2', rank3: 'H-3' },
  { name: 'Table-Tennis', rank1: 'H-1', rank2: 'H-2', rank3: 'H-3' },
  { name: 'Chess', rank1: 'H-1', rank2: 'H-2', rank3: 'H-3' },
];
const PlayerScore: PlayerStats[] = [
  { playername: 'Jordan ', stats: '12/3' },
  { playername: 'Jordan ', stats: '21' },
  { playername: 'Jordan', stats: '12' },
  { playername: 'Jordan', stats: '12' },
  { playername: 'Jordan', stats: '12' },
];
const Sport: Sport[] = [
  { name: 'Aquatics', gold: 'H1', silver: 'H2', bronze: 'H3', year: '2019' },
  { name: 'Athelitics', gold: 'H1', silver: 'H2', bronze: 'H3', year: '2019' },
  { name: 'Badminton', gold: 'H1', silver: 'H2', bronze: 'H3', year: '2019' },
  { name: 'Basketball', gold: 'H1', silver: 'H2', bronze: 'H3', year: '2019' },
  { name: 'Chess', gold: 'H1', silver: 'H2', bronze: 'H3', year: '2019' },
  { name: 'Cricket', gold: 'H1', silver: 'H2', bronze: 'H3', year: '2019' },
  { name: 'Football', gold: 'H1', silver: 'H2', bronze: 'H3', year: '2019' },
  { name: 'Hockey', gold: 'H1', silver: 'H2', bronze: 'H3', year: '2019' },
  {
    name: 'Indian Games',
    gold: 'H1',
    silver: 'H2',
    bronze: 'H3',
    year: '2019',
  },
  { name: 'Lawn Tennis', gold: 'H1', silver: 'H2', bronze: 'H3', year: '2019' },
  { name: 'Squash', gold: 'H1', silver: 'H2', bronze: 'H3', year: '2019' },
  {
    name: 'Table Tennis',
    gold: 'H1',
    silver: 'H2',
    bronze: 'H3',
    year: '2019',
  },
  { name: 'Volleyball', gold: 'H1', silver: 'H2', bronze: 'H3', year: '2019' },
  {
    name: 'Weightlifting',
    gold: 'H1',
    silver: 'H2',
    bronze: 'H3',
    year: '2019',
  },
];
