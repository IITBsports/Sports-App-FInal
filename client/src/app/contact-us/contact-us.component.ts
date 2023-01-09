import { Component, OnInit } from '@angular/core';
import { RefreshPageService } from '../refresh-page.service';

export interface Contacts {
  name: String;
  image: String;
  id: String;
  position: String;
  no: String;
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  positions: string[] = [
    'Cabinet',
    'Secretary',
    'Coach',
    'Heads',
    'Team',
    ];
  Contacts: any = [];
  contact: Contacts[] = [
    { name: "Ketan Agrawal", image: "../assets/people/Ketan_Agrawal_GSSA_Image.jpg", id: "ketan.agrawal811@gmail.com", no: "+91 9644267882", position: "General Secretary, Sports Affairs" },
    { name: "Prem Kavathiya", image: "../assets/people/prem.jpg", id: "premkavathiya77977@gmail.com", no: "+91 9925577977", position: "Institute Sports Nominee - Events and Clubs" },
    { name: "Khyati Meena", image: "../assets/people/Khyati.jpg", id: "khyatimeena1505@gmail.com", no: "+91 8879557659", position: "Institute Sports Girls' Nominee" },
    { name: "Shikhar Tandon", image: "../assets/people/Shikhar.png", id: "shikhartandon84@gmail.com", no: "+91 8006624428", position: "Institute Sports PG Nominee" },
  ]
  Secretaries: Contacts[] = [
    { name: "Rituraj Chaudhari", image: "../assets/people/Rituraj.jpg", id: "riturajchaudhari79@gmail.com", no: "+91 9822676984", position: "Institute Squash Secretary" },
    { name: "Sakshi Patil", image: "../assets/people/sakshi.jpeg", id: "20sakshispatil02@gmail.com", no: "+91 8689833497", position: "Institute Volleyball Secretary" },
    { name: "Aryamaan Verma ", image: "../assets/people/aryaman.jpeg", id: "aryamaanvermaindia@gmail.com", no: "+91 7021901244", position: "Institute Cricket Secretary" },
    { name: "Himanshu M Singhal", image: "../assets/people/Himanshu.jpg", id: "msinghal.himanshu@gmail.com ", no: "+91 9468531027", position: "Institute Board Games Secretary" },
    { name: "Ritam Barai", image: "../assets/people/ritam.jpeg", id: "ritambarai@gmail.com ", no: "+91 7605873033", position: "Institute Aquatics Secretary  " },
    { name: "Anshul Panwar", image: "../assets/people/anshul.jpg", id: "Anshul11011@gmail.com ", no: "+91 9456640638", position: "Institute Hockey Secretary" },
    { name: "Ayush Raisoni", image: "../assets/people/ayush.jpeg", id: "ayushraisoni@gmail.com  ", no: "+91 7066519824", position: "Institute Lawn Tennis Secretary" },
    { name: "Angoth Sai Vidhya", image: "../assets/people/vidya.JPG", id: "angothvidhya@gmail.com", no: "+91 7330989604", position: "Institute Athletics Secretary" },
    { name: "Aryan Aswani", image: "../assets/people/Aryan.jpg", id: "aryanaswani23@gmail.com", no: "+91 8408881022", position: "Institute Basketball secretary" },
    { name: "Anuj Partani", image: "../assets/people/Anuj.jpg", id: "partanianujn@gmail.com", no: "+91 8010798463", position: "Institute Badminton Secretary" },
    { name: "Adithyan Rajesh", image: "../assets/people/Adithyan.jpg", id: "adithyan221b@gmail.com ", no: "+91 8928871388", position: "Institute Weightlifting Secretary" },
    { name: "Ayush Dhole", image: "../assets/people/ayush dhole.jpg", id: "ayushdhole.ifs@gmail.com", no: "+91 9021162355", position: "Institute Football Secretary" },
    { name: "Riddhima Channa", image: "../assets/people/ridhima.png", id: "riddhimachanna.tt@gmail.com ", no: "+91 7999620412", position: "Institute Table Tennis secretary " },
  ]
  Heads: Contacts[] = [
    { name: "Goransh Gattani", image: "../assets/people/goransh.jpeg", id: "goranshgattani@gmail.com", no: "+91 7073301004", position: "Technical Head" },
    { name: "Mukul Raj", image: "../assets/people/mukul.jpeg", id: "mukulrk2002@gmail.com", no: "+91 7905700343", position: "Design and Creatives Head" },
    { name: "Parth Dange ", image: "../assets/people/parth.jpg", id: "dangeparth@gmail.com ", no: "+91 7977316675", position: "Media Head" },
  ]


  constructor(
    private refreshPageService: RefreshPageService,
  ) { }

  ngOnInit(): void {

    this.refreshPageService.getAllPeoples().subscribe(res => {
      console.log(res)
      this.Contacts =res;

      // console.log(this.Events)
      // console.log(this.Events.title);
      // console.log(this.Events.tags);
    });
  }

}
