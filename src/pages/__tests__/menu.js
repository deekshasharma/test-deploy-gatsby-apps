import React from "react"
import { render, screen } from "@testing-library/react"
import Menu from "../menu"

const menuData = {
  allMenuDataJson: {
    edges: [
      {
        node: {
          drinks: {
            heading: "Drinks",
            text: "Our Drink Menu",
            allDrinks: [
              {
                name: "Drip Coffee",
                price: "2.30",
              },
            ],
          },
        },
      },
      {
        node: {
          eats: {
            heading: "Eats",
            text: "Our Food Menu",
            allEats: [
              {
                name: "Breakfast Sandwich",
                price: "5.30",
              },
            ],
          },
        },
      },
    ],
  },
}

describe("header and footer", () => {
  it("renders header and footer", () => {
    render(<Menu data={menuData} />)
    const headerLogo = screen.getByAltText("logo")
    const footerLogo = screen.getByAltText("footer-logo")
    const address = screen.getByText(
      "2835 Cook Street Village, Victoria, British Columbia"
    )
    expect(headerLogo).toBeInTheDocument()
    expect(footerLogo).toBeInTheDocument()
    expect(address).toBeInTheDocument()
  })

  it("renders cart image", () => {
    render(<Menu data={menuData} />)
    const logo = screen.getByAltText("cart")
    expect(logo).toBeInTheDocument()
  })
})

describe("renders menu cards", () => {
  it("renders the menu text correctly", () => {
    render(<Menu data={menuData} />)
    const eatMenuItem = screen.getByText("Breakfast Sandwich")
    const eatItemPrice = screen.getByText("5.30")
    const drinkHeading = screen.getByText("Drinks")
    const drinkText = screen.getByText("Our Drink Menu")
    expect(eatMenuItem).toBeInTheDocument()
    expect(eatItemPrice).toBeInTheDocument()
    expect(drinkHeading).toBeInTheDocument()
    expect(drinkText).toBeInTheDocument()
  })

  it("renders correct number of buttons", () => {
    render(<Menu data={menuData} />)
    expect(screen.getAllByRole("button")).toHaveLength(6)
  })

  it("renders correct number add icons menu items", () => {
    render(<Menu data={menuData} />)
    expect(screen.getByAltText("add-Drip Coffee")).toBeInTheDocument()
    expect(screen.getByAltText("add-Breakfast Sandwich")).toBeInTheDocument()
  })
})
