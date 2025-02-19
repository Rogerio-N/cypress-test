import { faker } from '@faker-js/faker'

export function createRandomUser(): User {
    const uuid = faker.string.uuid().split('-')[0]
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        phone: faker.phone.number(),
        ssn: faker.string.numeric({ length: 9, allowLeadingZeros: true }),
        username: `${faker.internet.username()}}_${uuid}`,
        password: faker.internet.password(),
    }
}
