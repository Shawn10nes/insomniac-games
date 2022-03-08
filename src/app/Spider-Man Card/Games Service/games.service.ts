import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GameItemModel } from "../game-item.model";

@Injectable({
    providedIn: 'root'
})
export class GamesService {
    private baseUrl:string = "https://insomniac-games-default-rtdb.firebaseio.com/"
    private gamesEndpoint:string = "games.json";

    constructor(private http:HttpClient){

    }

    public getGames() {
        return this.http.get<GameItemModel []>(this.baseUrl + this.gamesEndpoint);
    }

    public getGame(index:number) {
        return this.http.get<GameItemModel>(this.baseUrl + 'games' + index + '.json')
    }

}