//const { default: loginPage } = require("../support/pom/loginPage");
require("cypress-xpath");

import LoginPage from '../support/pom/LoginPage';
import HomePage from '../support/pom/HomePage';
import RegistrationPage from '../support/pom/RegistrationPage';


describe('Test ADD CAR', () => {

    const config = Cypress.config();

    beforeEach(() => {
        cy.visit(config.baseUrl, {
            auth: {
                username: "guest",
                password: "welcome2qauto"
            }
        })

        HomePage.clickSignInButton()
        HomePage.modalTitle.should('be.visible');
        LoginPage.registrationButton.should('be.visible');
        LoginPage.typeEmail(config.login);
        LoginPage.typePassword(config.password);
        LoginPage.clickLoginButton();
        //LoginPage.clickRegistrationButton()
        //RegistrationPage.registrationTitle.should('be.visible');

    })



    it('should be visble dashbord', () => {
        //RegistrationPage.nameInput.should('be.visible');
        //RegistrationPage.typeName('@@');
        //RegistrationPage.clickLastName();
        //RegistrationPage.errorInvalidName.should('be.visible');
        //RegistrationPage.typeName('1');
        //RegistrationPage.clickLastName();
        //RegistrationPage.errorLengthName.should('be.visible');
        //RegistrationPage.nameInput.clear();
        //RegistrationPage.clickLastName();
        //RegistrationPage.errorRequiredName.should('be.visible');
    })




});