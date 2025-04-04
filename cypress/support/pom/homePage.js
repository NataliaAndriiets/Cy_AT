class HomePage {
    get signInButton() {
        
        return cy.xpath("//button[contains(@class, 'header_signin')]")
    }

    get modalTitle() {
        return cy.xpath("//h4[contains(@class, 'modal-title')]");
    }

    clickSignInButton() {
        this.signInButton.click();
    }
}

export default new HomePage();