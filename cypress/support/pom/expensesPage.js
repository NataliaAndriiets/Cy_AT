class ExpensesPage {
    getFuelButton() {
        return cy.contains('Fuel') // Or proper selector
    }

    getAddFuelButton() {
        return cy.get('[data-testid="addExpense"]')
    }

    getLitresInput() {
        return cy.get('input[formcontrolname="litres"]')
    }

    getCostInput() {
        return cy.get('input[formcontrolname="cost"]')
    }

    getSaveExpenseButton() {
        return cy.get('[type="submit"]')
    }

    addFuelExpense(litres, cost) {
        this.getFuelButton().click()
        this.getAddFuelButton().click()
        this.getLitresInput().type(litres)
        this.getCostInput().type(cost)
        this.getSaveExpenseButton().click()
    }
}

export const expensesPage = new ExpensesPage()