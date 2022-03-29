import { Injectable } from "@angular/core";
import { GameItemModel } from "../game-item.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})
export class GamesService {
    constructor(private db:AngularFireDatabase){

    }

    public getGames() {
        return this.db.list<GameItemModel>("games").valueChanges();
    }

    public getGame(index:number) {

    }

    addGame(game : GameItemModel){
        this.db.list<GameItemModel>("games").push(game);
    }

}