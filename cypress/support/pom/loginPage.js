
class LoginPage {
    get loginTitle() {
        return cy.get('h4').should('have.value', 'Log in');
        
    }

    get emailInput() {
        return cy.get('#signinEmail');
    }

    get passwordInput() {
        return cy.get('#signinPassword');
    }


    typeEmail(username) {
        this.emailInput.type(username);
        //return this;
    }


    typePassword(password) {
        this.passwordInput.clear().type(password);
        //return this;
    }


    get registrationButton() {
        return cy.contains('button', 'Registration');
    }

    clickRegistrationButton() {
        this.registrationButton.click();
    }

    get loginButton() {
        return cy.contains('button', 'Login');
    }

    clickLoginButton() {
        this.loginButton.click();
    }

}
export default new LoginPage();