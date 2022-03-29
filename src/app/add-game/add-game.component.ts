import { Component, OnInit } from '@angular/core';
import { GameItemModel } from '../Spider-Man Card/game-item.model';
import { GamesService } from '../Spider-Man Card/Games Service/games.service';

@Component({
  selector: 'ig-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  constructor(public gs: GamesService) { }

  ngOnInit(): void {
  }

  addGame(game: GameItemModel){
    this.gs.addGame(game);
  }

}
