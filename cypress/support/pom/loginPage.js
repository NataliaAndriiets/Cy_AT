
class LoginPage {
    get loginTitle() {
        return cy.get('h4').should('have.value', 'Log in');
        
    }

    get emailInput() {
        return cy.get('#signinEmail');
    }

    get passwordInput() {
        return cy.get('#password');
    }

    get loginButton() {
        return cy.get('button[type="submit"]');
    }

    typeUsername(username) {
        this.usernameInput.type(username);
        return this;
    }

    typePassword(password) {
        this.passwordInput.type(password);
        return this;
    }

    clickLoginButton() {
        this.loginButton.click();
    }

    get registrationButton() {
       
        return cy.contains('button', 'Registration');
    }

    clickRegistrationButton() {
        this.registrationButton.click();
    }
}
export default new LoginPage();