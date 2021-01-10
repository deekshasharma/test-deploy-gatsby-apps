import React from "react"
import renderer from "react-test-renderer"
import { SimpleHeader } from "../SimpleHeader"
import { render, screen } from "@testing-library/react"
import { MuktiLogo } from "../shared/MuktiLogo"

describe("SimpleHeader Snapshot", () => {
  it("renders SimpleHeader correctly", () => {
    const tree = renderer.create(<SimpleHeader />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("render Mukti logo button", () => {
    render(<MuktiLogo />)
    expect(screen.getByRole("button")).toBeInTheDocument()
  })
})
