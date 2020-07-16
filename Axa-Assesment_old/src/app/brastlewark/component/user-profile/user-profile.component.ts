import { Component, OnInit } from '@angular/core';
import { BrastlewarkService } from '../../services/brastlewark.service';
import { UserModel } from '../../models/user.model';
import { BrastlewarkModel } from '../../models/brastlewark.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  static Route = 'user';
  allUserProf: BrastlewarkModel;
  userProf: UserModel;
  constructor(private service: BrastlewarkService, private route: ActivatedRoute) {  }

  ngOnInit(): void {
   // let id = this.route.snapshot.queryParams["id"];
    this.route.params.subscribe(params => {
      if (params && params.id) {
        this.getUser(params.id);
        console.log(params.id);
      }
    });
  
  
  }

  getUser(id: number){
    this.service.getUser(id).subscribe(data => {
      if (data){
        this.userProf = data;    
        console.log(this.userProf);   
      }
    });
  }

}
