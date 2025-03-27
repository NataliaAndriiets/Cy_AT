
class LoginPage {
 
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
}
export default new LoginPage();