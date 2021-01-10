import React from "react"
import renderer from "react-test-renderer"
import { HeaderWithMenu } from "../HeaderWithMenu"
import { render, screen } from "@testing-library/react"

describe("HeaderWithMenu Snapshot", function () {
  it("renders HeaderWithMenu correctly", () => {
    const tree = renderer.create(<HeaderWithMenu routes={[]} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe("renders header components with menu", () => {
  it("renders 2 buttons with no routes", () => {
    render(<HeaderWithMenu routes={[]} />)
    expect(screen.getAllByRole("button")).toHaveLength(2)
  })

  it("renders 4 buttons with all routes", () => {
    const routes = [
      { name: "Food & Drinks", route: "/menu" },
      { name: "about", route: "/about" },
    ]
    render(<HeaderWithMenu routes={routes} />)
    expect(screen.getAllByRole("button")).toHaveLength(4)
  })

  it("renders Mukti logo image", () => {
    render(<HeaderWithMenu routes={[]} />)
    const logo = screen.getByAltText("logo")
    expect(logo).toBeInTheDocument()
  })

  it("renders cart image", () => {
    render(<HeaderWithMenu routes={[]} />)
    const logo = screen.getByAltText("cart")
    expect(logo).toBeInTheDocument()
  })

  it("renders cart-size for non-empty cart", () => {
    render(<HeaderWithMenu routes={[]} cartSize={"5"} />)
    const cartSizeText = screen.getByText("5")
    expect(cartSizeText).toBeInTheDocument()
  })

  it("render menu text", () => {
    const routes = [
      { name: "Food & Drinks", route: "/menu" },
      { name: "About", route: "/about" },
    ]
    render(<HeaderWithMenu routes={routes} />)
    const menuText = screen.getByText("Food & Drinks")
    const aboutText = screen.getByText("About")
    expect(menuText).toBeInTheDocument()
    expect(aboutText).toBeInTheDocument()
  })
})
