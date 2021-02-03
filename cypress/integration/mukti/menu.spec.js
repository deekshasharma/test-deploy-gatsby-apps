const thanksMsg =
  "Thanks for giving us the chance to serve you. We will send an SMS once the order is ready!"
context("Ordering Workflow", () => {
  beforeEach(() => {
    cy.visit("/menu")
  })

  it("Add a Drip Coffee to the cart", () => {
    cy.get('[alt="add-Drip Coffee"]').click()
    cy.get("[data-cy=cart-size]").should("have.text", "1")
  })

  it("Navigation does not affect the cart size", () => {
    cy.get('[alt="add-Drip Coffee"]').click()

    cy.visit("/about")
    cy.get("[data-cy=cart-size]").should("have.text", "1")

    cy.visit("/")
    cy.get("[data-cy=cart-size]").should("have.text", "1")
  })

  it("Add multiple items can be added to the cart", () => {
    cy.get('[alt="add-Americano"]').click()
    cy.get('[alt="add-Salad"]').click()
    cy.get("[data-cy=cart-size]").should("have.text", "2")
  })

  it("Ordering Food and Drink", () => {
    //Adds the items in the cart
    cy.get('[alt="add-Americano"]').click()
    cy.get('[alt="add-Salad"]').click()

    //Visits cart page to verify items and total amount
    cy.visit("/cart")
    cy.get("[data-cy=total-amount]").should("have.text", "$18.70")
    cy.contains("Americano").should("have.text", "Americano")
    cy.contains("Salad").should("have.text", "Salad")

    //Order Now button should be disabled
    cy.get("[data-cy=order-now]").should("be.disabled")

    //Enter value in Full Name text field and verify Order Now button
    cy.get("[id=full-name]")
      .type("Deeksha Sharma")
      .should("have.value", "Deeksha Sharma")
    cy.get("[data-cy=order-now]").should("be.disabled")

    //Enter value in Phone Number text field and verify Order Now button
    cy.get("[id=phone-number]")
      .type("6316816545")
      .should("have.value", "6316816545")
    cy.get("[data-cy=order-now]").should("not.be.disabled")

    //Click the Order Now button
    cy.get("[data-cy=order-now]").click()

    // Thanks message should be displayed with a link to /menu page
    cy.contains(thanksMsg).should("be.visible")
    cy.contains("Buy Again").should("have.attr", "href")

    //Clicking Buy Again should navigate to /menu
    cy.contains("Buy Again").click()
    cy.url().should("include", "/menu")
  })
})
