const thanksMsg =
  "Thanks for giving us the chance to serve you. We will send an SMS once the order is ready!"
context("Actions", () => {
  beforeEach(() => {
    cy.visit("/menu")
  })

  // it("reload the menu page", () => {
  //   cy.reload()
  // })

  // it("Test if Drip Coffee added to the cart", () => {
  //   cy.get('[alt="add-Drip Coffee"]').click()
  //   cy.get("[data-cy=cart-size]").should("have.text", "1")
  // })

  // it("Test that navigation does not affect the cart size", () => {
  //   cy.get('[alt="add-Drip Coffee"]').click()
  //
  //   cy.visit("/about")
  //   cy.get("[data-cy=cart-size]").should("have.text", "1")
  //
  //   cy.visit("/")
  //   cy.get("[data-cy=cart-size]").should("have.text", "1")
  // })

  // it("Test if multiple items can be added to the cart", () => {
  //   cy.get('[alt="add-Americano"]').click()
  //   cy.get('[alt="add-Salad"]').click()
  //   cy.get("[data-cy=cart-size]").should("have.text", "2")
  // })

  it("Test if correct items are added to the cart", () => {
    cy.get('[alt="add-Americano"]').click()
    cy.get('[alt="add-Salad"]').click()

    cy.visit("/cart")
    cy.get("[data-cy=total-amount]").should("have.text", "$18.70")
    cy.contains("Americano").should("have.text", "Americano")
    cy.contains("Salad").should("have.text", "Salad")

    cy.get("[data-cy=order-now]").should("be.disabled")
    cy.get("[id=full-name]")
      .type("Deeksha Sharma")
      .should("have.value", "Deeksha Sharma")
    cy.get("[data-cy=order-now]").should("be.disabled")

    cy.get("[id=phone-number]")
      .type("6316816545")
      .should("have.value", "6316816545")
    cy.get("[data-cy=order-now]").should("not.be.disabled")

    cy.get("[data-cy=order-now]").click()
    cy.contains(thanksMsg).should("be.visible")
    cy.contains("Buy Again").should("have.attr", "href")
    cy.contains("Buy Again").click()
    cy.url().should("include", "/menu")
  })
})
