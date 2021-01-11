import React from "react"
import { render, screen } from "@testing-library/react"
import { PageLayout } from "../shared/PageLayout"

describe("PageLayout", function () {
  it("renders header without menu", () => {
    render(<PageLayout hideMenu={true} />)
    expect(screen.getAllByRole("button")).toHaveLength(1)
    const muktiLogo = screen.getByAltText("logo")
    expect(muktiLogo).toBeInTheDocument()
  })
})
