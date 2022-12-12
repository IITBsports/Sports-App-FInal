import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  // sport: String;
  constructor(private router: Router) { }
  rules:String;
  ngOnInit() {
    function loadHTMl(id, filename){
      console.log(`div id: ${id}, filename: "athletics.html"`);

      let xhttp;
      let element = document.getElementById(id);
      let file = filename;
      
      if ( file ){
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
          if (this.status == 4){
            if(this.status == 200) {element.innerHTML = this.responseText;}
            if(this.status == 404) {element.innerHTML = "<h1> Page Not Found </h1>"}
          }
        }
        xhttp.open("GET", `templates/${file}`, true);
        xhttp.send();
        return;
      }
    }
    // const frame = document.getElementById("frame");
    // const p = document.createElement("p");
    // p.textContent = "Hello World";
    // frame?.appendChild(p);
    // this.sport=this.router.url.split('/')[2].toLowerCase();
    // if(this.sport=="athletics"){
    //   this.rules=`Students Gymkhana/ Coach have the right to use any of the slot for the students camp, inter hostel, Inter IIT Camp of any other program that has been approved by Chairman (Sports)/ Dean (SA)
    //   The pool slots are strictly implemented during the summer months, other period if the number of swimmers in the big pool is less than 30 they may be permitted to swim without encroaching ladies slots
    //   General Rules
    //   Swimming is prohibited without membership card.
    //   The membership card is not transferable .If this rule is violated, membership will stand cancelled.
    //   Guest charges are Rs 20/- per dip.
    //   Only the primary member of the swimming pool is allowed to bring the guest .No depended /school children are eligible to bring the guset.
    //   Guest will be allowed only once/twice in a week.
    //   Primary member has to fill the guest form each time available at the pool office and entry should be made in guest entry book as well as main entry book at the counter.
    //   It is compulsory that the guest should be accompanied by the primary member.
    //   During ladies slot no male member is permitted to swim, however female members are allowed to use the pool during general slots.
    //   Swimming costume is must for all using the swimming pool .The costume should be non- transparent and non-white in colour.
    //   Women or men having long hair must wear a swimming cap.
    //   Any person having open cuts , wounds and eye infection or any other communicable disease are not allowed to enter the pool.
    //   Anyone under the influence of drugs liquor or other intoxiscates are not allowed to enter the premises of the swimming pool.
    //   The member should leave their possessions and foot wear in the cloak room.
    //   Members must take bath before entering the swimming pool. If necessary they are advised to use soap to remove any oil from hair .
    //   Swimming is strictly prohibited in the absence of a life guard .
    //   Beginners should remain at the shallow end of the pool and always wear a red cap. Beginners below 12 years should be accompanied by their parents.
    //   Never push any one into the pool as horse play is not permitted in the pool and never swim beyond your capacity.
    //   Photography in the pool premises is not allowed unless prior permission is obtained.
    //   Making the Membership Card
    //   You can take a pink form from swimming pool counter or office in the evening from 5:00 PM to 8:00 PM.
    //   You would need a passport size photograph to stick on the form and one more to stick on your swimming card.
    //   After filling up the form you should get the General Physician’s signature and stamp from IIT Hospital. You would be checked for sensitivity to chlorine, skin problems, infection in ears etc.
    //   You should submit the form to Swimming Pool office, along with a passport size photograph
    //   Please wait for a day or two for processing of your form. You can collect you card from swimming pool office after two days from submitting the form.
    //   Extra info: Swimming Pool office is to your right after you enter the swimming pool.`
    // }
    // this.sport=this.router.url.split('/')[2].toLowerCase();
    // if(this.sport=="aquatics"){
    //   this.rules=`Students Gymkhana/ Coach have the right to use any of the slot for the students camp, inter hostel, Inter IIT Camp of any other program that has been approved by Chairman (Sports)/ Dean (SA)
    //   The pool slots are strictly implemented during the summer months, other period if the number of swimmers in the big pool is less than 30 they may be permitted to swim without encroaching ladies slots
    //   General Rules
    //   Swimming is prohibited without membership card.
    //   The membership card is not transferable .If this rule is violated, membership will stand cancelled.
    //   Guest charges are Rs 20/- per dip.
    //   Only the primary member of the swimming pool is allowed to bring the guest .No depended /school children are eligible to bring the guset.
    //   Guest will be allowed only once/twice in a week.
    //   Primary member has to fill the guest form each time available at the pool office and entry should be made in guest entry book as well as main entry book at the counter.
    //   It is compulsory that the guest should be accompanied by the primary member.
    //   During ladies slot no male member is permitted to swim, however female members are allowed to use the pool during general slots.
    //   Swimming costume is must for all using the swimming pool .The costume should be non- transparent and non-white in colour.
    //   Women or men having long hair must wear a swimming cap.
    //   Any person having open cuts , wounds and eye infection or any other communicable disease are not allowed to enter the pool.
    //   Anyone under the influence of drugs liquor or other intoxiscates are not allowed to enter the premises of the swimming pool.
    //   The member should leave their possessions and foot wear in the cloak room.
    //   Members must take bath before entering the swimming pool. If necessary they are advised to use soap to remove any oil from hair .
    //   Swimming is strictly prohibited in the absence of a life guard .
    //   Beginners should remain at the shallow end of the pool and always wear a red cap. Beginners below 12 years should be accompanied by their parents.
    //   Never push any one into the pool as horse play is not permitted in the pool and never swim beyond your capacity.
    //   Photography in the pool premises is not allowed unless prior permission is obtained.
    //   Making the Membership Card
    //   You can take a pink form from swimming pool counter or office in the evening from 5:00 PM to 8:00 PM.
    //   You would need a passport size photograph to stick on the form and one more to stick on your swimming card.
    //   After filling up the form you should get the General Physician’s signature and stamp from IIT Hospital. You would be checked for sensitivity to chlorine, skin problems, infection in ears etc.
    //   You should submit the form to Swimming Pool office, along with a passport size photograph
    //   Please wait for a day or two for processing of your form. You can collect you card from swimming pool office after two days from submitting the form.
    //   Extra info: Swimming Pool office is to your right after you enter the swimming pool.`
    // }
    // this.sport=this.router.url.split('/')[2].toLowerCase();
    // if(this.sport=="badminton"){
    //   this.rules=`Only IIT Bombay students, staff and faculty possessing a valid IIT Bombay identity card are allowed
    //   IIT Bombay alumni are allowed to use the courts only on Saturday and Sunday from 9:00AM to 5:00PM
    //   Gum soled Badminton shoes are mandatory when using the courts. Running shoes and other gum soled shoes are strictly not permitted
    //   T-shirts and shorts are compulsory for everyone. In case of improper attire, entry to the courts shall be denied.
    //   Courts may be pre-reserved for Institute events or team practice. Information regarding the same will be put up on the notice board.
    //   2nd court from the stage side is reserved for girls. NO court is reserved for the staff and faculty
    //   Players must make an entry in the logbook on entering and leaving the courts
    //   IIT Bombay Sports will enforce the rules of court play through the council and the caretakers of the courts.
    //   Damage to the courts or equipment would imply a strict disciplinary action and fine against the offender.`
    // }
    // if(this.sport=="basketball"){
    //   this.rules=`Court Timings
    //   Both indoor and outdoor basketball courts are open daily except for certain institute holidays.
    //   Morning timings: 6:00 am to 9:00 am
    //   Evening timings: 5:00 pm to 10:00 pm
    //   Who may use the courts?
    //   IIT Bombay students, staff and faculty possessing a valid IIT Bombay identity card
    //   Guests must be accompanied by the host member
    //   Players must make an entry in the logbook on entering and leaving the courts
    //   Priority of play and court reservations
    //   The courts are available on a first come-first serve basis
    //   Players may be asked to vacate the courts which are pre-reserved during the specified hours, if the need arises
    //   Courts are not open for reservations. Special requests regarding the same may be put forward to the council
    //   Courts may be pre-reserved for girls, Institute events or team practice. Information regarding the same will be put up on the notice board.
    //   General rules for court use
    //   Courts are to be used only for playing basketball
    //   Basketball shoes or gum soled shoes are mandatory when using the courts
    //   Running shoes are strictly not permitted
    //   Please dispose off the trash in proper receptacles
    //   No eatables are allowed on the courts.
    //   Enforcement of rules
    //   IIT Bombay Sports will enforce the rules of court play through the council and the caretakers of the courts
    //   Failure to adhere to the rules will result in loss of court privileges
    //   Issue of equipment
    //   Basketballs can be issued from store room located in sac or in outdoor facilities
    //   Issued equipment should be used properly and returned after use without any damage
    //   Rules regarding fine
    //   The fine will be depending upon the extent of damage caused
    //   Any other damage to the courts or equipment would imply a strict disciplinary action and fine against the offender`
    // }
    // if(this.sport=="board-games"){
    //   this.rules=`Room Timings
    //   The Board Games room, Old Snooker room and the Chess Room all remain Open from 6:00 am to 10:00 pm everyday except for national holidays and special day offs.
      
    //   Cue Stick Maintenance
    //   The tip of the cue stick wears down with frequent usage. So it is important to keep replacing the tip of the stick on regular intervals.
      
    //   You can buy the required stuff here.
      
    //   The detailed procedure for the same is available here.
      
    //   Board Games Room Location
    //   The Board Games Room and the Chess Room are located in the New Gymkhana Building opposite Hostel 11. The Old Snooker room is located in the Old SAC (next to MI Room) opposite Hostel 1.`
    // }
    // if(this.sport=="cricket"){
    //   this.rules=`Institute Cricket team will be given the first priority and others might be asked to leave the ground during team practice
    //   Tennis Ball Cricket is strictly prohibited on cricket pitches and anywhere inside the cricket boundries unless there is some tennis ball event organised by IIT Bombay Sports
    //   Shoes are compulsory to use the Indoor facilities
    //   The Flood lights used to play during night will be switched off by 22:00 hrs.
    //   To use them for any time after that, prior permission from the Gymkhana Officer In-charge is necessary
    //   To use any of the pitches, prior permission for the cricket secretary is mandatory.
    //   Metal spikes are not allowed on any of the pitches.`
    // }
    // if(this.sport=="football"){
    //   this.rules=`Playing cricket is strictly prohibited inside the football ground. Strict action will be taken against the students who do so
    //   Ground will be available to the enthusiasts on first come first serve basis.
    //   However, Institute team practice will be given the first preference, and other students might be asked to leave during team practice
    //   The field remains shut during monsoon until any notice. Students found playing on the field during monsoon or any other maintenance period (which will be informed) might be penalised
    //   Football ground isn’t open for booking in any circumstances. Special requests regarding the same must be put forward to the secretary
    //   The floodlights will be switched off after 22:00 hrs, extension of which will be possible only after permission from the Gymkhana In-Charge`
    // }
    // if(this.sport=="hockey"){
    //   this.rules=`General Instruction
    //   No other sport or any activity that damages the hockey field is allowed on the hockey field without the permission of the Sports Officer in-charge
    //   Attire
    //   All the players must kit up in shorts and shoes before entering the field
    //   Player must step inside the ground either wearing sports shoes or barefeet
    //   Timings
    //   The Team Practice starts from 1800 hrs everyday and goes up to 2030 hrs
    //   You're most welcome to come and play Hockey at any time on the field
    //   However if you want to switch on the floodlights post 2200 hrs then you will require prior permission of the Hockey Secretary.`
    // }
    // if(this.sport=="indian-games"){
    //   this.rules=`Indoor courts remain open daily except for certain institute holidays from 6:00AM to 9:00 AM and 5:00 PM to 10:00 PM
    //   Safety guards and other required safety items will be issued against a proper entry in the logbook with an ID card.
    //   IIT Bombay students, staff and faculty possessing a valid IIT Bombay identity card
    //   Players must make an entry in the logbook on entering and leaving the courts
    //   You can play barefoot or using Gum soled shoes. Running shoes are strictly not permitted.
    //   Courts may be pre-reserved for Institute events or team practice. Information regarding the same will be put up on the notice board.
    //   IIT Bombay Sports will enforce the rules of court play through the council and the caretakers of the courts.
    //   Damage to the courts or equipment would imply a strict disciplinary action and fine against the offender.`
    // }
    // if(this.sport=="lawn-tennis"){
    //   this.rules=`Court Timings
    //   Tennis courts are open daily except for certain institute holidays
    //   Morning timings: 6:00 am to 9:00 am
    //   Evening timings: 3:30 pm to 10:00 pm
    //   Who may use the courts?
    //   IIT Bombay students, staff and faculty possessing a valid IIT Bombay identity card
    //   Guests must be accompanied by the host member
    //   Players must make an entry in the logbook on entering and leaving the courts
    //   Priority of play and court reservations
    //   The courts are available on a first come-first serve basis
    //   Players may be asked to vacate the courts which are pre-reserved during the specified hours, if the need arises
    //   Courts are not open for reservations. Special requests regarding the same may be put forward to the council
    //   Courts may be pre-reserved for girls, Institute events or team practice. Information regarding the same will be put up on the notice board
    //   General rules for court use
    //   Courts are to be used only for playing tennis
    //   Tennis shoes or gum soled shoes are mandatory when using the courts
    //   Running shoes are strictly not permitted
    //   Please dispose off the trash in proper receptacles
    //   No eatables are allowed on the courts
    //   Enforcement of rules
    //   IIT Bombay Sports will enforce the rules of court play through the council and the caretakers of the courts
    //   Failure to adhere to the rules will result in loss of court privileges and other disciplinary actions.
    //   Issue of equipment
    //   Racquets and balls can be issued from the store room outside the tennis courts, only on on entering your name in the logbook and depositing your ID cards
    //   Issued equipment should be used properly and returned after use without any damage
    //   Rules regarding fine
    //   If issued racquets are found broken or missing, then a minimum fine of INR 1,000 will be imposed on the issuer
    //   The fine may be higher depending upon the extent of damage caused
    //   Any other damage to the courts or equipment would imply a strict disciplinary action and fine against the offender`
    // }
    // if(this.sport=="squash"){
    //   this.rules=`Court Timings:
    //   Morning: 6:00 - 9:30 AM
      
    //   Evening: 5:00-10:00 PM
      
    //   Who may use the Room:
    //   IIT Bombay students, staff and faculties possessing a valid IIT Bombay identity card
    //   Guests must be accompanied by the host member
    //   Alumni have to get approval from sports incharge before playing in the court
    //   Player must make entry in the logbook while entering and leaving the court
    //   General Rules:
    //   Gum soled shoes are a must on the courts. They must be clean and have to be carried to court and worn
    //   In case of all the courts being occupied, players are allowed a practice time of 5 minutes and a best of 3 games match
    //   Taking of consumables and refreshments into the playing area is to be strictly avoided
    //   The courts will remain booked during the week for upcoming event, team practice and NSO . Updates regarding the same will be put up on the courts
    //   Issue of Equipment
    //   Only one ball will be issued per court can be issued against an I-card`
    // }
    // if(this.sport=="table-tennis"){
    //   this.rules=`Hall Timings:
    //   4pm to 10 pm
      
    //   Who may use the Hall:
    //   IIT Bombay students, staff and faculties possessing a valid IIT Bombay identity card
    //   Guests must be accompanied by the host member
    //   Player must make entry in the logbook while entering and leaving the court
    //   Priority of play and Reservations:
    //   Tables are available on first come first serve basis
    //   Players may be asked to vacate the tables which are pre-reserved during the specefic hours
    //   Tables may be pre-reserved for Girls, Institute events and team practice. Information regarding the same will be put up on the notice board
    //   Tables are not open for reservations, special requests regarding the same may be put forward to the council
    //   General Rules:
    //   T-Shirt and shorts or track-pants are to be worn. Jeans are not allowed.
    //   Gum-soled shoes are mandatory for all the players using the facility
    //   Ensure that you put the table covers back on the table after you finish playing.
    //   Issue of Equipment
    //   Rackets and balls can be issued for personal usage from the desk outside the hall or the SAC Store Room
    //   The issued equipment should be used properly and returned after use without any physical damage`
    // }
    // if(this.sport=="volleyball"){
    //   this.rules=`Volleyballs will be issued against proper entry in logbook with ID card
    //   IIT Bombay students, staff and faculty possessing a valid IIT Bombay identity card
    //   Players must make an entry in the logbook on entering and leaving the courts
    //   You can play barefoot or using Gum soled shoes. Running shoes are strictly not permitted
    //   Courts may be pre-reserved for Institute events or team practice. Information regarding the same will be put up on the notice board
    //   IIT Bombay Sports will enforce the rules of court play through the council and the caretakers of the courts
    //   Damage to the courts or equipment would imply a strict disciplinary action and fine against the offender`
    // }

  }

}
