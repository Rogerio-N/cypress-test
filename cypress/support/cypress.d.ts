/// <reference types="cypress" />

// interface FixtureTypes {
//     users: typeof users
// }

declare namespace Cypress {
    interface Chainable {
        // fixture<K extends keyof FixtureTypes>(
        //     fixtureName: K
        // ): Chainable<FixtureTypes[K]>

        login(email: string | undefined, password: string | undefined)

        registerRandomUser(): Chainable<User>
    }
}
