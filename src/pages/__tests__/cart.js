import React from "react"
import { render, screen } from "@testing-library/react"
import Cart from "../cart"

//TODO: How to check for conditional rendering?
describe("renders cart", () => {
  it("renders empty cart message", () => {
    render(<Cart />)
    const emptyCartMsg = screen.getByText(
      "Hmm! 🤔 your cart is empty. Why don't you try our freshly prepared beverages or food?"
    )
    expect(emptyCartMsg).toBeInTheDocument()
  })

  it("renders link and link text", () => {
    render(<Cart />)
    const tryMenuLink = screen.getByRole("link")
    const linkText = screen.getByText("Try our menu")
    expect(tryMenuLink).toBeInTheDocument()
    expect(linkText).toBeInTheDocument()
  })

  it("contains the link for menu", () => {
    render(<Cart />)
    const linkText = screen.getByText("Try our menu")
    expect(linkText.closest("a")).toHaveAttribute("href", "/menu")
  })
})
