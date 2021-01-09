import React from "react"
import renderer from "react-test-renderer"
import { SimpleHeader } from "../SimpleHeader"
import { render, screen } from "@testing-library/react"
import { MuktiLogo } from "../shared/MuktiLogo"

describe("SimpleHeader component Snapshot", () => {
  it("renders SimpleHeader correctly", () => {
    const tree = renderer.create(<SimpleHeader />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("Render Mukti logo button on header ", () => {
    render(<MuktiLogo />)
    expect(screen.getByRole("button")).toBeInTheDocument()
  })
})
