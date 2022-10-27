import {faker} from '@faker-js/faker';      // we need only part of the module
import { Mappable } from './CustomMap';

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor () {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.latitude())
        }
    }

    markerContent (): string {
        return `<h4>User Name: ${this.name}<h4>`;
    }
}