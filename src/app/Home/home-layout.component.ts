import { Component } from "@angular/core";
import { GameItemModel } from "../Spider-Man Card/game-item.model";
import { mock_game_list } from "../Spider-Man Card/mock_game_list";

@Component({
    selector: 'ig-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent{
    games: GameItemModel [] = [];

    constructor(){
      for(var game of mock_game_list){
        this.games.push(game);
      }
    }
}