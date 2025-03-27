const { default: loginPage } = require("../support/pom/loginPage");

import LoginPage from '../support/pom/loginPage';
import HomePage from '../support/pom/homePage';


describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit("https://qauto.forstudy.space/", {
            auth: {
                username: "guest",
                password: "welcome2qauto"
            }
        })
    })


    it('should login succesfully with valid credentials', () => {
        LoginPage.typeUsername('your_username')
        LoginPage.typePassword('your password')
        LoginPage.clickLoginButton();
    })
});