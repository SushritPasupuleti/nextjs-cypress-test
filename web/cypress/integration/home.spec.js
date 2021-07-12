/// <reference types="cypress"/>

context("Home Page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })


    it("should find our welcome page and message", () => {
        cy.get("h1").contains("Welcome");
    })

    it("should find our get started message", () => {
        cy.get("p").contains("Get started by editing");
    })

    it("should find Documentation", () => {
        cy.get("h2").contains("Documentation");
    })

    it("should find Learn", () => {
        cy.get("h2").contains("Learn");
    })

    it("should find Examples", () => {
        cy.get("h2").contains("Examples");
    })

    it("should find Deploy", () => {
        cy.get("h2").contains("Deploy");
    })
})