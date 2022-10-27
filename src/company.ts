import {faker} from '@faker-js/faker';      // we need only part of the module
import { Mappable } from './CustomMap';

export class Company implements Mappable{
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor () {
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.latitude())
        }
    }
    markerContent (): string {
        return `
            <div>
                <h3>Company Name: ${this.companyName}<h3>
                <h4>Cathphrase: ${this.catchPhrase}<h4>
            </div>`
    }
}