import { Component } from "@angular/core";
import { GameItemModel } from "../Spider-Man Card/game-item.model";
import { GamesService } from "../Spider-Man Card/Games Service/games.service";
import { mock_game_list } from "../Spider-Man Card/mock_game_list";

@Component({
    selector: 'ig-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent{
    games: GameItemModel [] = [];

    constructor(private gamesService:GamesService){
      
    }

    ngOnInit(): void {
      this.gamesService.getGames().subscribe(data => {
        console.log("Fetching game data");
        for (var game of data) {
          console.log(game);
          this.games.push(game);
        }

      })
    }
}