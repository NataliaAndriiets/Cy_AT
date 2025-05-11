class GaragePage {
    getAddCarButton() {
        return cy.get('[data-testid="addCar"]') // Adjust selector if needed
    }

    getBrandInput() {
        return cy.get('input[formcontrolname="brand"]')
    }

    getModelInput() {
        return cy.get('input[formcontrolname="model"]')
    }

    getMileageInput() {
        return cy.get('input[formcontrolname="mileage"]')
    }

    getSaveCarButton() {
        return cy.get('[type="submit"]')
    }

    addNewCar(brand, model, mileage) {
        this.getAddCarButton().click()
        this.getBrandInput().type(brand)
        this.getModelInput().type(model)
        this.getMileageInput().type(mileage)
        this.getSaveCarButton().click()
    }
}

export const garagePage = new GaragePage()
export const garagePage = new GaragePage()