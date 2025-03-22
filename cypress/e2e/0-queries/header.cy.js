
require("cypress-xpath");

describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit("https://qauto.forstudy.space/", {
            auth: {
                username: "guest",
                password: "welcome2qauto"
        }})
    })

    it("My test", () => {
        cy.pause(1000)
    })


    it('Verify that you can find 1 button on the header', () => {
        cy.xpath("//div[contains(@class, 'hero-descriptor')]//button").should('have.length', 1)

    })

 
})

