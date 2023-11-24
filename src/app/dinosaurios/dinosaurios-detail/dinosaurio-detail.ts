import { Dinosaurio } from "../dinosaurio";

export class DinosaurioDetail extends Dinosaurio{
    description:string;
    feeding:string;
    discoveryCountry:string;
    era:string;
    constructor(id:number, name:string, scientificName:string, description:string, shortDescription:string,
        feeding:string,discoveryCountry:string, image:string, era:string){
            super(id, name, scientificName, shortDescription, image);
            this.description=description;
            this.feeding=feeding;
            this.discoveryCountry=discoveryCountry;
            this.era=era;
    }
}