require("cypress-xpath");

describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit("https://qauto.forstudy.space/", {
            auth: {
                username: "guest",
                password: "welcome2qauto"
            }
        })
    })

    it("My test", () => {
        cy.pause(1000)
    })


    it('Verify that you can find 5 links to buttons on the footer', () => {
        cy.xpath("//div[contains(@class, 'contacts_socials socials')]//a").should('have.length', 5)

    })

    it('Verify that you can find 2 links to buttons on the footer', () => {
        cy.xpath("//div[contains(@class, 'col-md-6 d-flex flex-column align-items-center align-items-md-end justify-content-md-end mb-2 mt-3 mt-md-0')]//a").should('have.length', 2)

    })


})