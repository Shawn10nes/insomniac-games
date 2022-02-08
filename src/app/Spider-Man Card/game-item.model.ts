export class GameItemModel {
    img: string;
    game: string;
    description: string;

    constructor(img: string, game: string, description: string){
        this.img = img;
        this.game = game;
        this.description = description;
    }
}