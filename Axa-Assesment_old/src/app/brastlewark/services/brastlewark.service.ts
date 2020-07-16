import { Injectable } from '@angular/core';
import { JsonConvert } from 'json2typescript';
import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BrastlewarkModel } from '../models/brastlewark.model';

@Injectable({
  providedIn: 'root'
})
export class BrastlewarkService {
  private readonly baseUrl = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
  private jc: JsonConvert;
  userInfo: UserModel;
  allUsers: BrastlewarkModel;

  constructor(private http: HttpClient) { 
    this.jc = new JsonConvert();
  }

  getAllUserProfiles(): Observable<BrastlewarkModel> {
    return this.http.get(`${this.baseUrl}`).pipe(
      map(resp => {
        const desr = this.jc.serialize(resp, BrastlewarkModel);
        console.log(resp);
       return desr;
      }, error => {
        throw new Error('error');
      })
    )
  }

  getUser(id: number): Observable<UserModel>{
    return this.http.get(`${this.baseUrl}`).pipe(
      map(resp => {
        this.allUsers= this.jc.serialize(resp, BrastlewarkModel);
        return this.allUsers.Brastlewark.find(x => x.id == id);
      }, error => {
        throw new Error('error');
      })
    )
  }
}
