import { Component, OnInit } from '@angular/core';
import { BrastlewarkService } from '../services/brastlewark.service';
import { BrastlewarkModel } from '../models/brastlewark.model';
import { UserModel } from '../models/user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brastlewark',
  templateUrl: './brastlewark.component.html',
  styleUrls: ['./brastlewark.component.scss']
})
export class BrastlewarkComponent implements OnInit {
  static Route = 'brastlewark';
  allUserProf: BrastlewarkModel;
  originData: BrastlewarkModel;
  userProf: UserModel;
  elements: any;
  filterElem: string;
  value: string;
  constructor(private service: BrastlewarkService, private router: Router, private route: ActivatedRoute) { 
    this.elements = ['Age', 'Name', 'Profession', 'Freind'];
  }

  ngOnInit(): void {
    this.getAllUser();

  }
  getAllUser(){
    this.service.getAllUserProfiles().subscribe(data => {
      if (data){
        console.log(data.Brastlewark);
        this.allUserProf = data;
        this.originData = data;
        
      }
    });
  }

  searchUserByFilter(value: string){
    console.log(value);
    console.log(this.filterElem);
    const res = new BrastlewarkModel();
    console.log(this.originData.Brastlewark);
    switch(this.filterElem){
      case this.elements[0]:
        res.Brastlewark = this.allUserProf.Brastlewark.filter(x => x.age == parseInt(value));
        break;
      case this.elements[1]:
        res.Brastlewark = this.allUserProf.Brastlewark.filter(x => x.name.includes(value));
        this.allUserProf.Brastlewark = res.Brastlewark;
        break;
      case this.elements[2]:
        res.Brastlewark = this.allUserProf.Brastlewark.filter(x => x.professions.indexof(value));
        this.allUserProf.Brastlewark = res.Brastlewark;
        break;
      case this.elements[3]:
        res.Brastlewark = this.allUserProf.Brastlewark.filter(x => x.friends.indexof(value));
        this.allUserProf.Brastlewark = res.Brastlewark;
        break;
      default:
        this.allUserProf.Brastlewark = this.originData.Brastlewark;
    }
    if(value == '' || value == undefined){
      this.allUserProf.Brastlewark = this.originData.Brastlewark;
    }
    
  }

  userProfileById(id: number){

    this.router.navigate(['/user', id], { relativeTo: this.route.parent });
   // this.router.navigate(['/user', { id: id}]);
  }

}
