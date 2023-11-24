export class Dinosaurio {
    id:number;
    name:string;
    scientificName:string;
    shortDescription:string;
    image:string;
    constructor(id:number, name:string, scientificName:string, shortDescription:string, image:string){
        this.id=id;
        this.name=name;
        this.scientificName=scientificName;
        this.shortDescription=shortDescription;
        this.image=image;
    }
}
