class RegistrationPage {
    get registrationTitle() {
      
        return cy.xpath("//h4[contains(@class, 'modal-title')]");

    }


    clickTitle() {
        this.registrationTitle.click()
    }

    //name

    get nameInput() {
        return cy.get('#signupName');

    }

    typeName(name) {
        this.nameInput.clear().type(name);
        //return this;
    }

    clickName() {
        this.nameInput.click();
    }

    get errorLengthName() {
        return cy.contains('p', 'Name has to be from 2 to 20 characters long');
    }


    get errorRequiredName() {
        return cy.contains('p', 'Name required');
    }


    get errorInvalidName() {
        return cy.contains('p', 'Name is invalid');
    }

    //lastname
    get lastNameInput() {
        return cy.get('#signupLastName');
    }

    clickLastName() {
        this.lastNameInput.click();
    }

    typeLastName(lastName) {
        this.lastNameInput.clear().type(lastName);
        //return this;
    }

    get errorLengthLastName() {
        return cy.contains('p', 'Last name has to be from 2 to 20 characters long');
    }


    get errorRequiredLastName() {
        return cy.contains('p', 'Last name required');
    }


    get errorInvalidLastName() {
        return cy.contains('p', 'Last name is invalid');
    }


    //email
    get emailInput() {
        return cy.get('#signinEmail');
    };

    clickEmail() {
        this.emailInput.click();
    }

    typeEmail(email) {
        this.emailInput.clear().type(email);
    };


     get errorIncorrectEmail() {
            return cy.contains('p', 'Email is incorrect');
        };
    
     get errorRequiredEmail() {
            return cy.contains('p', 'Email required');
        };

    //password

    get passwordInput() {
        return cy.get('#password');
    }

    clickPassword() {
        this.passwordInput.click();
    }

    typePassword(password) {
        this.passwordInput.clear().type(password);
    };

     get errorLengthPassword() {
        return cy.contains('p', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    };

    get errorRequiredPassword() {
        return cy.contains('p', 'Password required');
    };

    //register button
     get registerButton() {
        return cy.contains('button', 'Register');
    }


    clickRegisterButton() {
        this.registerButton.click();
    }


    clickDisabledRegisterButton() {
       
        cy.contains('button', 'Register').should('be.disabled');

    }
  


    

    get emailInput() {
        return cy.get('#signupEmail');
    }

    get passwordInput() {
        return cy.get('#signupPassword');
    }

   

    typeUsername(username) {
        this.usernameInput.type(username);
        return this;
    }

    typePassword(password) {
        this.passwordInput.type(password);
        return this;
    }

   
}

export default new RegistrationPage();