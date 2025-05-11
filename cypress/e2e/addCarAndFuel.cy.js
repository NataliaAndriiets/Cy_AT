import { garagePage } from '../support/pom/garagePage'
import { expensesPage } from '../support/pom/expensesPage'
import { loginPage } from '../support/pom/loginPage'

describe('Garage and Expenses Test', () => {
    beforeEach(() => {
        cy.visit('/')
        loginPage.login(Cypress.env('email'), Cypress.env('password'))
    })

    it('should add a car and fuel expense', () => {
        garagePage.addNewCar('Toyota', 'Corolla', '12345')
        expensesPage.addFuelExpense('30', '1200')
    })
})