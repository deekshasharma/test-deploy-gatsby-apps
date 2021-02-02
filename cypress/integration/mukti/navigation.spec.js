context("Navigation", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Test forward and backward behavior in the browser", () => {
    cy.visit("/cart")
    cy.go("back")
    cy.location("pathname").should("not.include", "cart")

    cy.go("forward")
    cy.location("pathname").should("include", "cart")
  })

  it("Navigate to empty cart page and verify menu link", () => {
    cy.visit("/cart")
    cy.contains("Try our menu").should("be.visible").and("have.attr", "href")
    cy.contains("Try our menu").click()
    cy.url().should("include", "/menu")
  })

  it("Navigate between about page and menu page", () => {
    cy.visit("/about")
    cy.url().should("include", "/about")

    cy.visit("/menu")
    cy.url().should("include", "/menu")
    cy.url().should("not.include", "/about")
  })

  it("Navigate from cart page to home", () => {
    cy.visit("/cart")
    cy.get("button").click()
    cy.url().should("include", "/")
    cy.url().should("not.include", "/about")
    cy.url().should("not.include", "/cart")
    cy.url().should("not.include", "/menu")
  })
})
