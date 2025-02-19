export class RegisterPage {
    private elements = {
        inputFirstName: () => cy.get('#customer\\.firstName'),
        inputLastName: () => cy.get('#customer\\.lastName'),
        inputAddress: () => cy.get('#customer\\.address\\.street'),
        inputCity: () => cy.get('#customer\\.address\\.city'),
        inputState: () => cy.get('#customer\\.address\\.state'),
        inputZipCode: () => cy.get('#customer\\.address\\.zipCode'),
        inputPhone: () => cy.get('#customer\\.phoneNumber'),
        inputSsn: () => cy.get('#customer\\.ssn'),
        inputUsername: () => cy.get('#customer\\.username'),
        inputPassword: () => cy.get('#customer\\.password'),
        inputConfirmPassword: () => cy.get('#repeatedPassword'),
        buttonRegister: () => cy.findByRole('button', { name: 'Register' }),
        textSuccessMessage: () =>
            cy.findByText(
                'Your account was created successfully. You are now logged in.'
            ),
        textErrors: () => cy.get('.error'),
    }

    typeFirstNName(firstName: string) {
        this.elements.inputFirstName().type(firstName)
    }

    typeLastName(lastName: string) {
        this.elements.inputLastName().type(lastName)
    }

    typeAddress(address: string) {
        this.elements.inputAddress().type(address)
    }

    typeCity(city: string) {
        this.elements.inputCity().type(city)
    }

    typeState(state: string) {
        this.elements.inputState().type(state)
    }

    typeZipCode(zipCode: string) {
        this.elements.inputZipCode().type(zipCode)
    }

    typePhone(phone: string) {
        this.elements.inputPhone().type(phone)
    }

    typeSsn(ssn: string) {
        this.elements.inputSsn().type(ssn)
    }

    typeUsername(username: string) {
        this.elements.inputUsername().type(username)
    }

    typePassword(password: string) {
        this.elements.inputPassword().type(password)
    }

    typeConfirmPassword(password: string) {
        this.elements.inputConfirmPassword().type(password)
    }

    clickRegisterButton() {
        this.elements.buttonRegister().click()
    }

    fillRegisterForm(user: User) {
        this.typeFirstNName(user.firstName)
        this.typeLastName(user.lastName)
        this.typeAddress(user.address)
        this.typeCity(user.city)
        this.typeState(user.state)
        this.typeZipCode(user.zipCode)
        this.typePhone(user.phone)
        this.typeSsn(user.ssn)
        this.typeUsername(user.username)
        this.typePassword(user.password)
        this.typeConfirmPassword(user.password)
    }

    getSuccessMessage() {
        return this.elements.textSuccessMessage()
    }

    getErrors() {
        return this.elements.textErrors()
    }
}
