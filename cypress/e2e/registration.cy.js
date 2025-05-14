//const { default: loginPage } = require("../support/pom/loginPage");
require("cypress-xpath");

import LoginPage from '../support/pom/LoginPage';
import HomePage from '../support/pom/HomePage';
import RegistrationPage from '../support/pom/RegistrationPage';


describe('Registration page test', () => {

    const baseUrl = Cypress.config().baseUrl;

    beforeEach(() => {
        cy.visit(baseUrl, {
            auth: {
                username: "guest",
                password: "welcome2qauto"
            }
        })

        HomePage.clickSignInButton()
        HomePage.modalTitle.should('be.visible');
        LoginPage.registrationButton.should('be.visible');
        LoginPage.clickRegistrationButton()
        RegistrationPage.registrationTitle.should('be.visible');

    })
    
    

    it('should validate name field', () => {
       
        RegistrationPage.nameInput.should('be.visible');
        RegistrationPage.typeName('@@');
        RegistrationPage.clickLastName();
        RegistrationPage.errorInvalidName.should('be.visible');
        RegistrationPage.typeName('1');
        RegistrationPage.clickLastName();
        RegistrationPage.errorLengthName.should('be.visible');
        RegistrationPage.nameInput.clear();
        RegistrationPage.clickLastName();
        RegistrationPage.errorRequiredName.should('be.visible');
    })

    it('should validate lastName field', () => {
        
        RegistrationPage.lastNameInput.should('be.visible');
        RegistrationPage.typeLastName('@@');
        RegistrationPage.clickName();
        RegistrationPage.errorInvalidLastName.should('be.visible');
        RegistrationPage.typeLastName('1');
        RegistrationPage.clickName();
        RegistrationPage.errorLengthLastName.should('be.visible');
        RegistrationPage.lastNameInput.clear();
        RegistrationPage.clickName();
        RegistrationPage.errorRequiredLastName.should('be.visible');
    })


    it('should validate email field', () => {
        RegistrationPage.emailInput.should('be.visible');
        RegistrationPage.typeEmail('££');
        RegistrationPage.clickName();
        RegistrationPage.errorIncorrectEmail.should('be.visible');
        RegistrationPage.emailInput.clear();
        RegistrationPage.clickName();
        RegistrationPage.errorRequiredEmail.should('be.visible'); 

    })

    it('should validate password field', () => {
        RegistrationPage.passwordInput.should('be.visible');
        RegistrationPage.typePassword('1£');
        RegistrationPage.clickName();
        RegistrationPage.errorLengthPassword.should('be.visible');
        RegistrationPage.passwordInput.clear();
        RegistrationPage.clickName()
        RegistrationPage.errorRequiredPassword.should('be.visible'); 
    });

    it('should validate registration button', () => {
        
        RegistrationPage.clickDisabledRegisterButton();

    })


});