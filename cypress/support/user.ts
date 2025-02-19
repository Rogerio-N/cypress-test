import { createRandomUser } from 'cypress/factories/userFactory'

Cypress.Commands.add('registerRandomUser', () => {
    const user = createRandomUser()
    return cy
        .request({
            method: 'POST',
            url: '/parabank/register.htm',
            form: true,
            body: {
                ...user,
                confirm: user.password,
            },
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            return user
        })
})
