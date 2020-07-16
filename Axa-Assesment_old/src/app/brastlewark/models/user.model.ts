import { JsonObject, JsonProperty, Any } from 'json2typescript';
@JsonObject('UserModel')
export class UserModel {
    @JsonProperty('id', Number, true)
    id: number;
    @JsonProperty('name', String, true)
    name: string;
    @JsonProperty('thumbnail', String, true)
    thumbnail: string;
    @JsonProperty('age', Number, true)
    age: number;
    @JsonProperty('weight', Number, true)
    weight: number;
    @JsonProperty('height', Number, true)
    height: number;
    @JsonProperty('hair_color', String, true)
    hair_color: string;
    @JsonProperty('professions', Any, true)
    professions: any; 
    @JsonProperty('friends', Any, true)
   friends: any;

    constructor(){
       const profession = new Array();
       this.id = undefined;
       this.name = undefined;
       this.thumbnail = undefined;
       this.age = undefined;
       this.weight = undefined;
       this.height = undefined;
       this.hair_color = undefined;
       this.professions = undefined;
       this.friends = undefined
     }
}


