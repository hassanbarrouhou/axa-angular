import { JsonProperty, JsonObject } from 'json2typescript';
import { UserModel } from './user.model';

@JsonObject('BrastlewarkModel')
export class BrastlewarkModel {
    @JsonProperty('Brastlewark', [UserModel], true)
    Brastlewark: UserModel[];

    constructor(){
        this.Brastlewark = undefined;
    }
}
