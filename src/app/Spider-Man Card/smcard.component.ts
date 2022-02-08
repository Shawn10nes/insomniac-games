import { Component, Input } from "@angular/core";

@Component({
    selector: 'ig-smcard',
    templateUrl: 'smcard.component.html',
    styleUrls: ['smcard.component.css']
})
export class SMCardComponent {
    @Input() img: string;
    @Input() game: string;
    @Input() description: string;

    constructor(){
        this.img = "";
        this.game = "";
        this.description = "";
    }
}