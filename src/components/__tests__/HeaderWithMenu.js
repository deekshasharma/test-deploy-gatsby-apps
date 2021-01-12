import React from "react"
import renderer from "react-test-renderer"
import { HeaderWithMenu } from "../HeaderWithMenu"
import { render, screen } from "@testing-library/react"
const routes = [
  { name: "Food & Drinks", route: "/menu" },
  { name: "About", route: "/about" },
]
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
    expect(screen.getByText("5")).toBeInTheDocument()
  })

  it("render menu text", () => {
    render(<HeaderWithMenu routes={routes} />)
    expect(screen.getByText("Food & Drinks")).toBeInTheDocument()
    expect(screen.getByText("About")).toBeInTheDocument()
  })
})
