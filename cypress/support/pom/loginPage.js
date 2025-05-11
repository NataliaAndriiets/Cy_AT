
class LoginPage {
  // Registration selectors
  getNameInput() {
    return cy.get('input[formcontrolname="name"]')
  }

  getEmailInput() {
    return cy.get('input[formcontrolname="email"]')
  }

  getPasswordInput() {
    return cy.get('input[formcontrolname="password"]')
  }

  getRepeatPasswordInput() {
    return cy.get('input[formcontrolname="repeatPassword"]')
  }

  getRegisterButton() {
    return cy.get('button[type="submit"]')
  }

  // Login selectors
  getLoginButton() {
    return cy.contains('button', 'Sign In') // or update based on your page
  }

  login(email, password) {
    this.getEmailInput().type(email)
    this.getPasswordInput().type(password)
    this.getLoginButton().click()
  }

  register(name, email, password) {
    this.getNameInput().type(name)
    this.getEmailInput().type(email)
    this.getPasswordInput().type(password)
    this.getRepeatPasswordInput().type(password)
    this.getRegisterButton().click()
  }
}

export const loginPage = new LoginPage()















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