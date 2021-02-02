context("Local Storage", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("home page renders header with menu", () => {
    cy.get("[data-cy=with-menu]")
      .find("button")
      .should("have.length", 4)
      .should("contain", "DRINKS & FOOD")
      .should("contain", "ABOUT")
      .find("img")
      .should("have.length", 2)
      .and("have.attr", "alt")
  })

  it("cart page renders simple header with menu buttons", () => {
    cy.visit("/cart")
    cy.get("[data-cy=without-menu]")
      .find("button")
      .should("have.length", 1)
      .should("not.contain", "DRINKS & FOOD")
      .should("not.contain", "ABOUT")
      .find('[alt="logo"]')
      .should("be.visible")
  })
})
