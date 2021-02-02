context("Local Storage", () => {
  beforeEach(() => {
    cy.visit("/menu")
  })

  it("Empty local storage after adding item to cart", () => {
    cy.get('[alt="add-Drip Coffee"]').click()
    cy.get("[data-cy=cart-size]").should("have.text", "1")

    cy.clearLocalStorage()
    cy.visit("/cart")
    cy.contains("Try our menu").should("be.visible").and("have.attr", "href")

    cy.visit("/menu")
    cy.get("[data-cy=cart-size]").should("have.text", "")
  })
})
