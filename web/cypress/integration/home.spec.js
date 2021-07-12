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
})