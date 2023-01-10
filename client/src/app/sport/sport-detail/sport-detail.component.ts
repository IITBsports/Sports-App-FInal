import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
  selector: 'app-sport-detail',
  templateUrl: './sport-detail.component.html',
  styleUrls: ['./sport-detail.component.css']
})
export class SportDetailComponent implements OnInit {
  sport: String;
  constructor(private router: Router) { }
  details:String;
  ngOnInit() {

    this.sport=this.router.url.split('/')[2].toLowerCase();
if(this.sport=="athletics"){
  this.details="The club aims at the general health and fitness of the students, along with preparing them for competitions. The students are put through efficient training routines under the guidance of experienced coaches. The routines generally include gymming, drills and basic yoga. We provide a very friendly and supportive environment in which you can develop your skills to the fullest. If athletics is your passion then this is the place to be!"
}
// this.sport=this.router.url.split('/')[2].toLowerCase();
if(this.sport=="aquatics"){
  this.details="Comprising of Swimming and Water Polo, Aquatics is one of the most widely practiced sports at IIT Bombay. Owing to the remarkable infrastructure facilities consisting of an Olympic-sized Swimming Pool, accompanied by a Beginners Baby Pool, IIT Bombay Aquatics has witnessed a tremendous growth over the years. IITB Swimming Pool is also affiliated to the Greater Mumbai Amateur Aquatic Association(GMAAA). With several exciting events spread throughout the year to cater to all levels of players, IITB Aquatics functions with the sole aim of promoting Swimming and Water Polo. Coached by Ritesh Guchhait, the Swimming and Water Polo teams of IIT Bombay have the most successful history and a reputable name at the Inter-IIT Aquatics Meet."
}
// this.sport=this.router.url.split('/')[2].toLowerCase();
if(this.sport=="badminton"){
  this.details="For all badminton loving folks of IIT Bombay. Founded a few years ago. It has been one of the most active clubs handling the most active sport in the institute. With promotion of Badminton as its true motive, it has organised a wide range of events in its first years of inception itself. This year it's gonna be bigger and better. Headed by the Badminton Secretary and driven by the conveners, Badminton Club will be one of the most happening clubs of the year. Let's take the game in the institute to a higher level."
}
if(this.sport=="board_games"){
  this.details="Institute Board Games cater to all who want to learn any kind of Board Games. With the increasing culture of Chess, Carrom and Pool in the Institute, we also conduct events for Snooker, Rubik’s Cube among others. We even have facilities for Foosball. We envision to take our Board Games culture to a renowned and established level of sport. Being indoor we have an opportunity to serve the students all 365 days. Board Games is not for the lethargic but for the enthusiastic. The Dark Knight Club and Rubik’s Cube Club are the subordinates of the IITB Board Games. Come be a part of the Institute Board Games!"
}
if(this.sport=="cricket"){
  this.details="Cricket is surely one of the most loved sports of the country and the IIT Bombay Cricket Club was formed to nurture this love of the cricket enthusiasts in the institute. With International level pitches, lush green outfield and Indoor Nets, IIT Bombay has one of the best cricketing facilities in the city. With all year round events and activities in the form of NSO, Mixed Cricket, Cric-mania and a lot more, the cricket club keeps the sport lovers active with a combination of fun events and serious sport."
}
if(this.sport=="football"){
  this.details="How does it feel when the floodlights go on, the matchball is ready, the referees walk in with the flags, the crowd starts to cheer, and you walk in, in the lineup, waiting for the whistle with your heart racing for everything at stake! Those matchday feels, the team talks in the dressing area, the calls on the pitch, the tactics and the mind games! We see this at the international level, and here in IIT Bombay we take the opportunity to live through it as well. With professional trainers, coaches, and state of the art facilities, your footballing experience in the institute is bound to load you with memories for life. Regardless of where you start from, you'll never fall short of opportunities to develop your gameplay, take it to the highest level and relish the most followed sport in the institute! Together, let's get this alight, and kickin!"
}
if(this.sport=="hockey"){
  this.details="Live, study and play in the heart of elite hockey in IIT Bombay! Hockey here is all about fun. Hockey Club provides a unique atmosphere where a player becomes a part of the hockey family which strives to educate, develop and encourage each and every one of its members on their quest to excellence."
}
if(this.sport=="indian_games"){
  this.details="Kho-Kho ranks as one of the most popular traditional sports in India. Like all Indian games, it is simple, inexpensive and enjoyable. It does, however, demand physical fitness, strength, speed and stamina, and a certain amount of ability. Dodging, feinting and bursts of controlled speed make this game quite thrilling. To catch by pursuit - to chase, rather than just run - is the capstone of Kho-Kho. The game develops qualities such as obedience, discipline, sportsmanship, and loyalty between team members. Kabaddi is played at all levels all across the Indian Subcontinent, from the most remote parts to major international championships. We here at IIT Bombay, to reinforce this traditional Indian game, have outdoor as well as indoor courts for all Kabaddi enthusiasts, be it professionals, or those looking to play it as a hobby. Playing this sport entails a lot of life skills such as discipline, teamwork, endurance, and a presence of mind. So be ready to defend your positions with your teammates by blocking; raid the opponent swiftly and tackle by toe touches, or be a master planner and devise your own tactics to be on top!"
}
if(this.sport=="basketball"){
  this.details="Basketball is not just a sport at IIT Bombay, it is a culture of it's own. There is a robust community of basketball players who enjoy and practice basketball all days of the week! The institute men's and women's teams have shown exemplary performances at Inter-IIT Sports Meets and also in the local circuit in Mumbai time and again. All enthusiastic players are guided wonderfully by the coach Mr. Vivek Pandey and encouraged to pursue the sport wholeheartedly. He is a master trainer who delves into the intricacies of the game and brings out the best out of all his players. The infrastructure at IIT Bombay boasts of two indoor and two outdoor state-of-the-art basketball courts. So come along and let's play basketball!"
}
if(this.sport=="weightlifting"){
  this.details="Those who think that weightlifting is a game of power, they are totally mistaken. Weightlifting is a purely technical game, which consists of two lifts - snatch, and clean & jerk in the respective order. Weightlifting was among those few sports featured in the first modern Olympic Games in 1896. In Inter-IIT, weightlifting plays a major role. Our IITB Weightlifting team has consistently remained in the first three positions since 1998. And most of the time it has captured the 1st position. Sumit Bhagat, famous in IIT Bombay won 4 gold medals in 4 consecutive years in campus. We have here great facilities and the best coach for weightlifting and weight training."
}
if(this.sport=="volleyball"){
  this.details="IIT Bombay Volleyball Club is one of the most enthusiastic clubs at IIT bombay and is committed to training athletes to perform at their highest level by uniting talented and passionate players. We view the volleyball court as our classroom, transformed to teach lessons of accountability, character, commitment, communication, cooperation, courage, discipline, integrity, leadership, respect, responsibility, teamwork, work ethic, and the importance of sacrifice and sportsmanship. We strive to have a positive impact on each and every individual in our club. We participate in various tournaments in and around Bombay. One of our main aims is performing well in Inter IIT - a battle where teams from different IIT's compete against each other in a battle for supremacy."
}
if(this.sport=="squash"){
  this.details="Squash as a sport has seen tremendous growth over the past few years in the Institute which can be accredited to the world-class infrastructure and increased activities related to the sport. The infrastructure at IIT Bombay boasts a total of 4 Air-conditioned Glass back wall courts. The warm and welcoming Squash community is what enhances the experience of the sport in the Institute. The Institute Squash Team of IIT Bombay regularly participates in the Professional Squash Circuit tournaments in Mumbai and has been a consistent performer in Inter-IIT Meets."
}
if(this.sport=="lawn_tennis"){
  this.details="Scientists and doctors around the world have often pointed to tennis as one of the healthiest activities that one can indulge in, thanks to its numerous physical, mental and emotional gains. Since its inception, the Tennis Club of IIT-B has kept growing over the years and has now become a hub for tennis enthusiasts. The purpose of the club is to conduct various events such as training camps, workshops and tournaments along with fun and recreational events like screenings of matches etc.So are you someone who's looking for competition, social play, team camaraderie, a good workout, tournaments exposure and some quality time with friends? Well then look no further, the Tennis Club of IIT-B shall strive to provide you with all of these and more!"
}
if(this.sport=="table_tennis"){
  this.details="Ever fancied playing in a state of the art, fully air conditioned table tennis court which you get to see in the Olympics? Look no further! We strive to portray table tennis as a sport with absolutely no prerequisites with a massive number of people picking up and excelling in this sport every year with the guidance of a dedicated coach and our team players. Headed by the Table Tennis secretary and driven by the conveners, Table Tennis Club promises fun to everyone who is a part of it. Lets take the game to a higher level."
}
if(this.sport=="aavhan"){
  this.details="Aavhan is the annual sports festival of IIT Bombay, conceptualised first in 2017. Witnessing a footfall of 6000+, the event has seen a phenomenal rise since its inception. Home to a plethora of sports from cricket to football, and squash to water polo, several intense battles have been fought and heroes born here. A place to revel in victory and learn from failures, an event that feels home while still meaning different things to different people, Aavhan has been a symbol of hope and perseverance."
}
if(this.sport=="rubix"){
  this.details="Initiated by IIT Bombay Sports in 2011, this club intends to provide an opportunity for all cubing enthusiasts of IIT Bombay to learn more about cubing. In 2012, we broke the WORLD RECORD (now former) of Most Number of people solving the cube simultaneously, where 937 people solved the cubes in less than 30 mins! To encourage cubing in the institute, we conduct various workshops, where we teach the beginners and advanced methods to solve the Rubik’s cube. Workshops are usually followed by an Institute level speed solving competition."
}
if(this.sport=="dkcc"){
  this.details="The Dark Knight, Chess club of IIT Bombay was established in 2013 and has been active in the institute ever since. We have organised several tournaments in various formats and coaching sessions for both advanced and beginners in the campus."
}
if(this.sport=="adventure"){
  this.details="Freedom, the Wall is a world-class climbing facility setup by IIT Bombay in collaboration with The Girivihar Club. Established on the 7th of May 2019, it has supported many climbing enthusiasts explore the sport ever since. The club aims towards popularizing the sport and promoting the true spirit of it, among all."
}
if(this.sport=="yoga"){
  this.details="Yogastha (meaning \"established in yoga\") is Wellness Club as an institute body under students' Gymkhana at IIT Bombay. Since its' inception on 1st International Day of Yoga (21st June 2015), the club is working towards a stress-free, peaceful campus community covering all wellness aspects as physical, emotional, spiritual, intellectual, etc. Since then the club is actively conducting weekly sessions and other events."
}
// else{this.router.navigate(['/explore']);}

  }

}
