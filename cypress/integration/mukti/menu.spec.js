/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("/menu")
  })

  it("click on add button", () => {
    cy.get('[alt="add-Drip Coffee"]').click()
  })
})
