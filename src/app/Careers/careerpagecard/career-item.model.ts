export class CareerItemModel {
    img: string;
    header: string;
    description: string;

    constructor(img: string, header: string, description: string){
        this.img = img;
        this.header = header;
        this.description = description;
    }
}