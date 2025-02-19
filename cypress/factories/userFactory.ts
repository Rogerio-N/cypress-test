import { faker } from '@faker-js/faker'

export function createRandomUser(): User {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        phone: faker.phone.number(),
        ssn: faker.string.numeric({ length: 9, allowLeadingZeros: true }),
        username: `${faker.internet.username()}_${faker.person.suffix()}`,
        password: faker.internet.password(),
    }
}
