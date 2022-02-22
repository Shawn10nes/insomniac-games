import { Component, Input } from '@angular/core';

@Component({
  selector: 'ig-careerpagecard',
  templateUrl: './careerpagecard.component.html',
  styleUrls: ['./careerpagecard.component.css']
})
export class CareerpagecardComponent {
  @Input() img: string;
  @Input() header: string;
  @Input() description: string;

  constructor(){
      this.img = "";
      this.header = "";
      this.description = "";
  }
}
