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

    it('Should have an error message when the password not match with confirm password', () => {
        const home = new HomePage()
        home.goTo()
        home.clickRegisterLink()
        cy.url().should('include', '/register.htm')

        const user = createRandomUser()
        const registerPage = new RegisterPage()
        registerPage.fillRegisterForm(user)
        registerPage.typeConfirmPassword('123456789')
        registerPage.clickRegisterButton()
        registerPage
            .getErrors()
            .should('exist')
            .and('be.visible')
            .and('contain.text', 'Passwords did not match')
    })

    it('Should have an error message when required field is empty', () => {
        const home = new HomePage()
        home.goTo()
        home.clickRegisterLink()
        cy.url().should('include', '/register.htm')

        const user = createRandomUser()
        const registerPage = new RegisterPage()
        user.address = '{backspace}'
        registerPage.fillRegisterForm(user)
        registerPage.clickRegisterButton()
        registerPage
            .getErrors()
            .should('exist')
            .and('be.visible')
            .and('contain.text', 'Address is required.')
    })

    it('Should have an error message when the username already exists', () => {
        const home = new HomePage()
        home.goTo()
        home.clickRegisterLink()
        cy.url().should('include', '/register.htm')

        cy.registerRandomUser().then((user) => {
            const registerPage = new RegisterPage()
            registerPage.fillRegisterForm(user)
            registerPage.clickRegisterButton()
            registerPage
                .getErrors()
                .should('exist')
                .and('be.visible')
                .and('contain.text', 'This username already exists.')
        })
    })
})
