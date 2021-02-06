context("Local Storage", () => {
  beforeEach(() => {
    cy.visit("/menu")
  })

  it("Store and delete data from localStorage", () => {
    cy.get('[alt="add-Drip Coffee"]')
      .click()
      .should(() => {
        expect(localStorage.getItem("cartSize")).to.eq("1")
      })

    cy.clearLocalStorage().should(localStorage => {
      expect(localStorage.getItem("cartSize")).to.be.null
    })

    cy.visit("/cart")
    cy.contains(
      "Hmm! 🤔 your cart is empty. Why don't you try our freshly prepared beverages or food?"
    ).should("be.visible")
  })
})
