import React from "react"
import { render, screen } from "@testing-library/react"
import { OrderSummary } from "../checkout/OrderSummary"

const items = [
  { name: "Latte", price: "4.00" },
  { name: "Chai", price: "5.57" },
]

describe("OrderSummary", () => {
  it("renders summary heading and total", () => {
    render(<OrderSummary items={items} />)
    expect(screen.getByText("ORDER SUMMARY")).toBeInTheDocument()
    expect(screen.getByText("ORDER TOTAL")).toBeInTheDocument()
  })

  it("renders item details", () => {
    render(<OrderSummary items={items} />)
    expect(screen.getByText("Latte")).toBeInTheDocument()
    expect(screen.getByText("$4.00")).toBeInTheDocument()
    expect(screen.getByText("Chai")).toBeInTheDocument()
    expect(screen.getByText("$5.57")).toBeInTheDocument()
  })

  it("renders correct total", () => {
    render(<OrderSummary items={items} />)
    expect(screen.getByText("$9.57")).toBeInTheDocument()
  })
})
