import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { HomeComponent } from './home/home.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { SportComponent } from './sport/sport.component';
import { EventsComponent } from './sport/events/events.component';
import { SportDetailComponent } from './sport/sport-detail/sport-detail.component';
import { RulesComponent } from './sport/rules/rules.component';
import { FacilitiesComponent } from './sport/facilities/facilities.component';
import { PeopleComponent } from './sport/people/people.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './blog/post/post.component';
import { AdminComponent } from './admin/admin.component';
import { AdminBlogComponent } from './admin/admin-blog/admin-blog.component';
import { AdminEventComponent } from './admin/admin-event/admin-event.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProfileComponent } from './profile/profile.component';
import { CertificateComponent } from './certificate/certificate.component';
import { GcComponent } from './gc/gc.component';
import { NewsComponent } from './gc/news/news.component';
import { NewsDetailsComponent } from './gc/news/news-details/news-details.component';
import { HammerModule } from '@angular/platform-browser';
import { MatchesComponent } from './sport/matches/matches.component';
import { GirlsComponent } from './girls/girls.component';
import { AdminCertificatesComponent } from './admin/admin-certificates/admin-certificates.component';

import { QrloggerService } from './admin/admin-dashboard/qrlogger.service';
import { EventComponent } from './event/event.component';
import { CookieModule } from 'ngx-cookie';
import { InterIitComponent } from './inter-iit/inter-iit.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatTimepickerModule } from 'mat-timepicker';
import { AddComplaintComponent } from './fifth/add-complaint/add-complaint.component';
import { ComplaintslistComponent } from './fifth/complaintslist/complaintslist.component';
import { DetailedEventComponent } from './detailed-event/detailed-event.component';
import { AdminScoresComponent } from './admin/admin-scores/admin-scores.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LinktreeComponent } from './linktree/linktree.component';
import { EditEventComponent } from './admin/edit-event/edit-event.component';
import { CommonModule } from '@angular/common';
import { AthleticsComponent } from './sport/athletics/athletics.component';
import { AquaticsComponent } from './sport/aquatics/aquatics.component';
import { BadmintonComponent } from './sport/badminton/badminton.component';
import { BasketballComponent } from './sport/basketball/basketball.component';
import { BoardGamesComponent } from './sport/board-games/board-games.component';
import { CricketComponent } from './sport/cricket/cricket.component';
import { FootballComponent } from './sport/football/football.component';
import { HockeyComponent } from './sport/hockey/hockey.component';
import { IndianGamesComponent } from './sport/indian-games/indian-games.component';
import { LawnTennisComponent } from './sport/lawn-tennis/lawn-tennis.component';
import { SquashComponent } from './sport/squash/squash.component';
import { TableTennisComponent } from './sport/table-tennis/table-tennis.component';
import { VolleyballComponent } from './sport/volleyball/volleyball.component';
import { PointsComponent } from './admin/points/points.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { GcstandingsComponent } from './gc/gcstandings/gcstandings.component';
import { EditScoresComponent } from './admin/edit-scores/edit-scores.component';
import { PtsComponent } from './admin/pts/pts.component';
import { PtsInteriitComponent } from './admin/pts-interiit/pts-interiit.component';
import { IneriitstandingsComponent } from './inter-iit/ineriitstandings/ineriitstandings.component';
import { AdminQueryComponent } from './admin/admin-query/admin-query.component';
import { EditQueryComponent } from './admin/edit-query/edit-query.component';
import { WeightliftingComponent } from './sport/weightlifting/weightlifting.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstComponent,
    SecondComponent,
    FourthComponent,
    FifthComponent,
    SportComponent,
    EventsComponent,
    SportDetailComponent,
    RulesComponent,
    FacilitiesComponent,
    PeopleComponent,
    BlogComponent,
    PostComponent,
    AdminComponent,
    AdminBlogComponent,
    AdminEventComponent,
    AdminDashboardComponent,
    CalendarComponent,
    ProfileComponent,
    CertificateComponent,
    GcComponent,
    NewsComponent,
    NewsDetailsComponent,
    MatchesComponent,
    GirlsComponent,
    AdminCertificatesComponent,
    EventComponent,
    InterIitComponent,
    AddComplaintComponent,
    ComplaintslistComponent,
    DetailedEventComponent,
    AdminScoresComponent,
    ContactUsComponent,
    LinktreeComponent,
    EditEventComponent,
    AthleticsComponent,
    AquaticsComponent,
    BadmintonComponent,
    BasketballComponent,
    BoardGamesComponent,
    CricketComponent,
    FootballComponent,
    HockeyComponent,
    IndianGamesComponent,
    LawnTennisComponent,
    SquashComponent,
    TableTennisComponent,
    VolleyballComponent,
    PointsComponent,
    EditUserComponent,
    EditScoresComponent,
    GcstandingsComponent,
    PtsComponent,
    PtsInteriitComponent,
    IneriitstandingsComponent,
    AdminQueryComponent,
    EditQueryComponent,
    WeightliftingComponent,
  ],
  imports: [
    NgxMaterialTimepickerModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    CookieModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forRoot([
      { path: 'contact', component: FirstComponent },
      { path: 'linktree', component: LinktreeComponent },
      { path: 'edituser', component: EditUserComponent },
      { path: 'post', component: PostComponent },
      { path: 'explore', component: SecondComponent },
      { path: 'gc', component: GcComponent },
      { path: 'gcstandings', component: GcstandingsComponent },
      { path: 'gc/:standings', component: GcComponent },
      { path: 'gc/:scores', component: GcComponent },
      { path: 'gc/:roh', component: GcComponent },
      { path: 'gc/:legacy', component: GcComponent },
      { path: 'gc/:news', component: GcComponent },
      { path: 'inter-iit', component: InterIitComponent },
      { path: 'inter-iit/:standings', component: InterIitComponent },
      { path: 'inter-iit/:scores', component: InterIitComponent },
      { path: 'inter-iit/:roh', component: InterIitComponent },
      { path: 'inter-iit/:legacy', component: InterIitComponent },
      { path: 'inter-iit/:news', component: InterIitComponent },
      { path: 'interiitstandings', component: IneriitstandingsComponent },
      { path: 'girls', component: GirlsComponent },
      { path: 'event/:id', component: EventComponent },
      { path: 'news', component: NewsComponent },
      { path: 'news/:id2', component: NewsDetailsComponent },
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },

      { path: 'avail', component: FourthComponent },
      // { path: 'fullmenu', component: FifthComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'blog', component: PostComponent },

      { path: 'blog/:id2', component: PostComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'certificate', component: CertificateComponent },
      { path: 'events', component: EventsComponent },
      { path: 'sport/Athletics/rules', component: AthleticsComponent },
      { path: 'sport/Aquatics/rules', component: AquaticsComponent },
      { path: 'sport/Badminton/rules', component: BadmintonComponent },
      { path: 'sport/Basketball/rules', component: BasketballComponent },
      { path: 'sport/board_games/rules', component: BoardGamesComponent },
      { path: 'sport/Cricket/rules', component: CricketComponent },
      { path: 'sport/Football/rules', component: FootballComponent },
      { path: 'sport/Hockey/rules', component: HockeyComponent },
      { path: 'sport/indian_games/rules', component: IndianGamesComponent },
      { path: 'sport/lawn_tennis/rules', component: LawnTennisComponent },
      { path: 'sport/Squash/rules', component: SquashComponent },
      { path: 'sport/table_tennis/rules', component: TableTennisComponent },
      { path: 'sport/Volleyball/rules', component: VolleyballComponent },
      { path: 'sport/Weightlifting/rules', component: WeightliftingComponent },

      {
        path: 'sport/:name.trim()',
        component: SportComponent,
        children: [
          { path: '', redirectTo: 'detail', pathMatch: 'full' },
          { path: 'detail', component: SportDetailComponent },
          { path: 'events', component: EventsComponent },
          // { path: 'rules', component: RulesComponent },
          { path: 'facilities', component: FacilitiesComponent },
          { path: 'people', component: PeopleComponent },
          { path: 'matches', component: MatchesComponent },
        ],
      },
      // {
      //   path: 'sport/:name.trim()',
      //   component: SportComponent,
      //   children: [
      //     { path: '', redirectTo: 'detail', pathMatch: 'full' },
      //     { path: 'detail', component: SportDetailComponent },
      //     { path: 'events', component: EventsComponent },
      //     { path: 'rules', component: RulesComponent },
      //     { path: 'facilities', component: FacilitiesComponent },
      //     { path: 'people', component: PeopleComponent },
      //     { path: 'matches', component: MatchesComponent },
      //   ],
      // },
      {
        path: 'fullmenu',
        component: FifthComponent,
        children: [
          { path: '', redirectTo: 'complaints-list', pathMatch: 'full' },
          { path: 'complaints-list', component: ComplaintslistComponent },
          { path: 'add-complaint', component: AddComplaintComponent },
        ],
      },
      {
        path: 'admin',
        component: AdminComponent,


        children: [
          { path: '', component: AdminDashboardComponent },
          { path: 'scores', component: AdminScoresComponent },
          { path: 'event', component: AdminEventComponent },
          { path: 'event/:id', component: EditEventComponent },
          { path: 'scores/:id', component: EditScoresComponent },
          { path: 'blog', component: AdminBlogComponent },
          { path: 'certificates', component: AdminCertificatesComponent },
          { path: 'points', component: PointsComponent},
          { path: 'pts', component: PtsComponent},
          { path: 'interiitpts', component: PtsInteriitComponent},
          { path: 'queries', component: AdminQueryComponent},
          { path: 'edit-queries/:id', component:EditQueryComponent},

        ],
      },
      { path: ':other',redirectTo: '', pathMatch: 'prefix'  },
    ]),
    BrowserAnimationsModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    HighchartsChartModule,
    HammerModule,
  ],
  providers: [QrloggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
