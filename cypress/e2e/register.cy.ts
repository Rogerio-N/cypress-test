import { RegisterPage } from 'cypress/pages/registerPage'
import { HomePage } from 'cypress/pages/homePage'
import { createRandomUser } from 'cypress/factories/userFactory'

context('Register user', () => {
    it('Should create a new user with success', () => {
        const home = new HomePage()
        home.goTo()
        home.clickRegisterLink()
        cy.url().should('include', '/register.htm')

        const user = createRandomUser()

        const registerPage = new RegisterPage()
        registerPage.fillRegisterForm(user)
        registerPage.clickRegisterButton()
        registerPage.getSuccessMessage().should('exist').and('be.visible')
    })
})
