import {faker} from '@faker-js/faker';      // we need only part of the module

export class User {
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
}