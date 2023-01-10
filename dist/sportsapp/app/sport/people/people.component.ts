import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Contacts {
  name: String;
  image: String;
  id: String;
  position: String;
  no: String;
  sport: String;
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  contact: Contacts[] = [
    {
      name: 'Ketan Agrawal',
      image: '../assets/people/Ketan_Agrawal_GSSA_Image.jpg',
      id: 'ketan.agrawal811@gmail.com',
      no: '+91 9644267882',
      position: 'General Secretary, Sports Affairs',
      sport: '',
    },
    {
      name: 'Prem Kavathiya',
      image: '../assets/people/prem.jpg',
      id: 'premkavathiya77977@gmail.com',
      no: '+91 9925577977',
      position: 'Institute Sports Nominee - Events and Clubs',
      sport: '',
    },
    {
      name: 'Khyati Meena',
      image: '../assets/people/Khyati.jpg',
      id: 'khyatimeena1505@gmail.com',
      no: '+91 8879557659',
      position: "Institute Sports Girls' Nominee",
      sport: '',
    },
    {
      name: 'Shikhar Tandon',
      image: '../assets/people/Shikhar.png',
      id: 'shikhartandon84@gmail.com',
      no: '+91 8006624428',
      position: 'Institute Sports PG Nominee',
      sport: '',
    },
  ];
  Secretaries: Contacts[] = [
    {
      name: 'Rituraj Chaudhari',
      image: '../assets/people/Rituraj.jpg',
      id: 'riturajchaudhari79@gmail.com',
      no: '+91 9822676984',
      position: 'Institute Squash Secretary',
      sport: 'Squash',
    },
    {
      name: 'Sakshi Patil',
      image: '../assets/people/sakshi.jpeg',
      id: '20sakshispatil02@gmail.com',
      no: '+91 8689833497',
      position: 'Institute Volleyball Secretary',
      sport: 'Volleyball',
    },
    {
      name: 'Aryamaan Verma ',
      image: '../assets/people/aryaman.jpeg',
      id: 'aryamaanvermaindia@gmail.com',
      no: '+91 7021901244',
      position: 'Institute Cricket Secretary',
      sport: 'Cricket',
    },
    {
      name: 'Himanshu M Singhal',
      image: '../assets/people/Himanshu.jpg',
      id: 'msinghal.himanshu@gmail.com ',
      no: '+91 9468531027',
      position: 'Institute Board Games Secretary',
      sport: 'Board-Games',
    },
    {
      name: 'Ritam Barai',
      image: '../assets/people/ritam.jpeg',
      id: 'ritambarai@gmail.com ',
      no: '+91 7605873033',
      position: 'Institute Aquatics Secretary  ',
      sport: 'Aquatics',
    },
    {
      name: 'Anshul Panwar',
      image: '../assets/people/anshul.jpg',
      id: 'Anshul11011@gmail.com ',
      no: '+91 9456640638',
      position: 'Institute Hockey Secretary',
      sport: 'Hockey',
    },
    {
      name: 'Ayush Raisoni',
      image: '../assets/people/ayush.jpeg',
      id: 'ayushraisoni@gmail.com  ',
      no: '+91 7066519824',
      position: 'Institute Lawn Tennis Secretary',
      sport: 'Lawn-Tennis',
    },
    {
      name: 'Angoth Sai Vidhya',
      image: '../assets/people/vidya.JPG',
      id: 'angothvidhya@gmail.com',
      no: '+91 7330989604',
      position: 'Institute Athletics Secretary',
      sport: 'Athletics',
    },
    {
      name: 'Aryan Aswani',
      image: '../assets/people/Aryan.jpg',
      id: 'aryanaswani23@gmail.com',
      no: '+91 8408881022',
      position: 'Institute Basketball secretary',
      sport: 'Basketball',
    },
    {
      name: 'Anuj Partani',
      image: '../assets/people/Anuj.jpg',
      id: 'partanianujn@gmail.com',
      no: '+91 8010798463',
      position: 'Institute Badminton Secretary',
      sport: 'Badminton',
    },
    {
      name: 'Adithyan Rajesh',
      image: '../assets/people/Adithyan.jpg',
      id: 'adithyan221b@gmail.com ',
      no: '+91 8928871388',
      position: 'Institute Weightlifting Secretary',
      sport: 'Weightlifting',
    },
    {
      name: 'Korimi Vennela ',
      image: '../assets/people/Korimi.jpeg',
      id: 'kvennela139@gmail.com  ',
      no: '+91 9652984060',
      position: 'Institute Indian Games Secretary  ',
      sport: 'Indian Games',
    },
    {
      name: 'Ayush Dhole',
      image: '../assets/people/ayush dhole.jpg',
      id: 'ayushdhole.ifs@gmail.com',
      no: '+91 9021162355',
      position: 'Institute Football Secretary',
      sport: 'Football',
    },
    {
      name: 'Riddhima Channa',
      image: '../assets/people/ridhima.png',
      id: 'riddhimachanna.tt@gmail.com ',
      no: '+91 7999620412',
      position: 'Institute Table Tennis secretary ',
      sport: 'Table-Tennis',
    },
  ];
  Heads: Contacts[] = [
    {
      name: 'Goransh Gattani',
      image: '../assets/people/goransh.jpeg',
      id: 'goranshgattani@gmail.com',
      no: '+91 7073301004',
      position: 'Technical Head',
      sport: '',
    },
    {
      name: 'Mukul Raj',
      image: '../assets/people/mukul.jpeg',
      id: 'mukulrk2002@gmail.com',
      no: '+91 7905700343',
      position: 'Design and Creatives Head',
      sport: '',
    },
    {
      name: 'Parth Dange ',
      image: '../assets/people/parth.jpg',
      id: 'dangeparth@gmail.com ',
      no: '+91 7977316675',
      position: 'Media Head',
      sport: '',
    },
  ];
  sport: any;
  sportSpecificSecretary: Contacts;

  constructor(private router: Router) {}

  ngOnInit() {
    for (let secy in this.Secretaries) {
      this.sport = this.router.url.split('/')[2];
      if(this.sport == "board_games"){
        this.sport = "Board-Games"
      }
      if(this.sport == "indian_games"){
        this.sport = "Indian Games"
      }
      if(this.sport == "lawn_tennis"){
        this.sport = "Lawn-Tennis"
      }
      if(this.sport == "table_tennis"){
        this.sport = "Table-Tennis"
      }
      console.log(this.Secretaries[secy].sport);
      console.log(this.sport);
      if (this.Secretaries[secy].sport == this.sport) {
        this.sportSpecificSecretary = this.Secretaries[secy];
      }
    }
    console.log(this.sportSpecificSecretary);
  }
}
