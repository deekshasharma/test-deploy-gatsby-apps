import React from "react"
import renderer from "react-test-renderer"
import { SimpleHeader } from "../SimpleHeader"
import { render, screen } from "@testing-library/react"

describe("SimpleHeader Snapshot", () => {
  it("renders SimpleHeader correctly", () => {
    const tree = renderer.create(<SimpleHeader />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("render Mukti logo button", () => {
    render(<SimpleHeader />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByAltText("logo")).toBeInTheDocument()
  })
})
