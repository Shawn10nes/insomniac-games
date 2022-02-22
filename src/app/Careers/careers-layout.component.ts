import { Component } from "@angular/core";
import { CareerItemModel } from "./careerpagecard/career-item.model";
import { mock_career_list } from "./careerpagecard/mock_career_list";

@Component({
    selector: 'ig-careers-layout',
    templateUrl: 'careers-layout.component.html',
    styleUrls: ['careers-layout.component.css']
})

export class CareersLayoutComponent{
    careers: CareerItemModel [] = [];

    constructor(){
      for(var career of mock_career_list){
        this.careers.push(career);
      }
    }
}