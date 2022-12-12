import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RefreshPageService } from 'src/app/refresh-page.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  sport: String;
  Scores: any;
  RunningScores_arr: any;
  AvsBScores_arr: any;
  CricketScores_arr: any;
  // temp: any
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    private refreshPageService: RefreshPageService,
    private Activatedroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sport = this.router.url.split('/')[2];
    if(this.sport == 'board_games'){
      this.sport = "Board-Games"
    }
    if(this.sport == 'indian_games'){
      this.sport = "Indian-Games"
    }
    if(this.sport == 'lawn_tennis'){
      this.sport = "Lawn-Tennis"
    }
    if(this.sport == 'table_tennis'){
      this.sport = "Table-Tennis"
    }
    this.refreshPageService.getRunningEventScores().subscribe((res) => {
      this.Scores = res;
      console.log(this.sport)
      this.RunningScores_arr = [];
      for (let i = 0; i <= this.Scores.length; i++) {
        console.log(this.Scores[i].sport)
        if (this.Scores[i].sport == this.sport) {
          console.log(this.Scores[i])
          this.RunningScores_arr.push(this.Scores[i]);
          console.log(this.RunningScores_arr)
          // this.RunningScores_arr.push(this.Scores);
          // console.log(this.RunningScores_arr[i])
        }
      }
    });
    this.refreshPageService.getAvsBScores().subscribe((res) => {
      this.Scores = res;
      console.log(this.sport)
      this.AvsBScores_arr = [];
      for (let i = 0; i <= this.Scores.length; i++) {
        console.log(this.Scores[i].sport)
        if (this.Scores[i].sport == this.sport) {

          console.log(this.Scores[i])
          this.AvsBScores_arr.push(this.Scores[i]);
          console.log(this.AvsBScores_arr)
          // this.RunningScores_arr.push(this.Scores);
          // console.log(this.RunningScores_arr[i])
        }
      }
    });
    this.refreshPageService.getCricketScores().subscribe((res) => {
      this.Scores = res;

      console.log(this.sport)
      this.CricketScores_arr = [];
      for (let i = 0; i <= this.Scores.length; i++) {
        console.log(this.Scores[i].sport)
        if (this.Scores[i].sport == this.sport) {

          console.log(this.Scores[i])
          this.CricketScores_arr.push(this.Scores[i]);
          console.log(this.CricketScores_arr)
          // this.RunningScores_arr.push(this.Scores);
          // console.log(this.RunningScores_arr[i])
        }
      }
    });
  }
}
