export class HomePage {
    private elements = {
        registerLink: () => cy.findByRole('link', { name: 'Register' }),
    }

    goTo() {
        cy.visit('/')
    }

    clickRegisterLink() {
        this.elements.registerLink().click()
    }
}
